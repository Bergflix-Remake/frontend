import md5 from 'crypto-js/md5';

const trim = (value: string) => value.replace(/\/+$/, '');

export const apiBase = trim(
  import.meta.env.VITE_API_URL || 'http://127.0.0.1:1337',
);
export const mediaBase = trim(import.meta.env.VITE_MEDIA_URL || apiBase);
export const cdnBase = trim(
  import.meta.env.VITE_CDN_URL || 'https://cdn.bergflix.de',
);

/**
 * Resolve an API/media path. Absolute URLs are returned unchanged, so Strapi 5
 * absolute media URLs pass straight through while older relative paths still
 * resolve against the configured media origin.
 */
export const api = (path: string | undefined, fallback?: string) => {
  if (!path) return fallback || '';
  if (/^https?:\/\//i.test(path) || path.startsWith('data:')) return path;
  return `${mediaBase}/${path.replace(/^\/+/, '')}`;
};

export const cdn = (path: string | undefined, fallback?: string) =>
  path
    ? /^https?:\/\//i.test(path)
      ? path
      : `${cdnBase}/${path.replace(/^\/+/, '')}`
    : fallback || '';

export const gravatar = (
  email: string = 'user@bergflix.de',
  opts: { size: number; default: string } = {
    size: 500,
    default: 'https://cdn.bergflix.de/logo/light_bg.png',
  },
) =>
  `https://www.gravatar.com/avatar/${md5(email.trim().toLowerCase())}?size=${opts.size}&d=${opts.default}`;
