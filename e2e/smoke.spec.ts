import { expect, test } from '@playwright/test';

const user = process.env.E2E_USER || 'migration_test@example.invalid';
const password = process.env.E2E_PASSWORD || 'TestPassword123!';

test('home shows movies, series and collections', async ({ page }) => {
  await page.goto('/home');
  await expect(page.getByText('Filme', { exact: true })).toBeVisible();
  await expect(page.getByText('Serien', { exact: true })).toBeVisible();
  await page.locator('.home-container').scrollIntoViewIfNeeded();
  const poster = page.locator('.home-container img').first();
  await expect(poster).toBeVisible({ timeout: 30_000 });
  await expect(poster).toHaveAttribute('src', /^https?:\/\//, {
    timeout: 30_000,
  });
});

test('movies and shows routes render', async ({ page }) => {
  await page.goto('/movies');
  await expect(page.getByRole('heading', { name: 'WIP' })).toBeVisible();
  await page.goto('/shows');
  await expect(page.getByRole('heading', { name: 'WIP' })).toBeVisible();
});

test('details resolves an old numeric id and canonicalises the URL', async ({
  page,
}) => {
  await page.goto('/details/1');
  await expect(page).toHaveURL(/\/details\/[a-z0-9]{20,}$/);
  await expect(page.getByText('24 Episoden')).toBeVisible();
  await expect(page.getByText('2020')).toBeVisible();
  await expect(page.getByText('Die Bombe ist scharf!').first()).toBeVisible();
});

test('watch resolves an old numeric id, canonicalises and mounts playback', async ({
  page,
}) => {
  await page.goto('/watch/16');
  await expect(page).toHaveURL(/\/watch\/[a-z0-9]{20,}$/);
  await expect(page.getByText('Die Bombe ist scharf!').first()).toBeVisible();
  const iframe = page.locator('iframe').first();
  await expect(iframe).toBeVisible({ timeout: 30_000 });
  await expect(iframe).toHaveAttribute('src', /youtube.*G4dkLMj6GRQ/);
  const player = page.locator('.plyr').first();
  await expect(player).toBeVisible();
  const playButton = page.locator('.plyr__control--overlaid');
  if (await playButton.count()) await playButton.click({ force: true });
  await expect(player).not.toHaveClass(/plyr--paused/, { timeout: 30_000 });
});

test('search page queries the Meilisearch video index', async ({ page }) => {
  await page.goto('/search');
  await expect(page.getByText('Suchen', { exact: false })).toBeVisible();
  await expect(page.getByText(/results found/)).toBeVisible({
    timeout: 30_000,
  });
  const box = page.locator('.ais-SearchBox-input');
  await box.fill('Berg');
  await expect(page.locator('.ais-Hits-list')).toContainText(/Berg/i, {
    timeout: 30_000,
  });
  await expect(page.getByText('Genre')).toBeVisible();
  await expect(
    page.locator('.refinements').getByText('Serie', { exact: true }).first(),
  ).toBeVisible();
});

test('legal page renders imprint, privacy and terms', async ({ page }) => {
  await page.goto('/legal');
  await expect(page.getByRole('heading', { name: 'Impressum' })).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Datenschutz' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Benuzungsbedingungen' }),
  ).toBeVisible();
  await expect(page.getByText('Fabian Werner').first()).toBeVisible();
});

test('login and account work with a migrated password hash', async ({
  page,
}) => {
  await page.goto('/account/login');
  await page.getByPlaceholder('Email or Username').fill(user);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/\/account$/);
  await expect(page.getByText('Dein Profil')).toBeVisible();
  await expect(page.getByText('Erfolge & Statistiken')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Passwort Ändern' }),
  ).toBeVisible();
  await expect(page.getByPlaceholder('Aktuelles Passwort')).toBeVisible();

  // The profile update path uses the custom PUT /api/users/me route.
  const username = page.locator('input[type="text"]').first();
  await expect(username).toHaveValue(/migration_test|E2E_USER/);
});

test('register shows the confirmation step and sends an e-mail', async ({
  page,
}) => {
  const stamp = Date.now();
  await page.goto('/account/register');
  await page.getByPlaceholder('Username').fill(`e2e_${stamp}`);
  await page.getByPlaceholder('Email').fill(`e2e_${stamp}@example.invalid`);
  await page.getByPlaceholder('Password', { exact: true }).fill(password);
  await page.getByPlaceholder('Password bestätigen').fill(password);
  await page.getByRole('button', { name: 'Registrieren' }).click();
  await expect(page.getByText('Registrierung erfolgreich')).toBeVisible({
    timeout: 30_000,
  });
  await expect(
    page.getByText('Bitte überprüfe dein E-Mail Postfach'),
  ).toBeVisible();
});
