# Bergflix Frontend

[![Build](https://github.com/Bergflix-Remake/frontend/actions/workflows/build.yml/badge.svg?branch=rewrite)](https://github.com/Bergflix-Remake/frontend/actions/workflows/build.yml)

## Bergflix is back!

⌛ After being discontinued on the 28th July 2021, Bergflix is back with a new website and a new API. We are currently just two people instead of the 8 that worked on the original project, but oh well. \
We decided to start completely from scratch, with a brand new tech stack and design.

## Live and Development version

🌱 The project is currently in a very early stage in development, but you can still find a hosted version [here](https://dev.bergflix.de/). You can still download the latest build artifacts from the [Actions page](https://github.com/Bergflix-Remake/frontend/actions).

## Developement

👥 Clone the repository:

```bash
git clone https://github.com/Bergflix-Remake/frontend.git
```

🔽 Download and install the dependencies (Node 22+)

```bash
npm ci
```

💹 Start local development server

```bash
cp .env.example .env.local   # point at your local Strapi 5 instance
npm run dev
```

### Strapi 5 configuration

The frontend talks to native Strapi 5 responses (flattened documents,
`documentId`, absolute media URLs). Configure the public build-time values in
`.env.local`:

```bash
VITE_API_URL=http://127.0.0.1:1337
VITE_MEDIA_URL=http://127.0.0.1:1337
VITE_CDN_URL=https://cdn.bergflix.de
VITE_MEILISEARCH_HOST=http://127.0.0.1:7700
VITE_MEILISEARCH_API_KEY=<search-only key>
VITE_MEILISEARCH_INDEX=video
```

Old `/watch/<numericId>` and `/details/<numericId>` links keep working: the page
resolves the numeric id through the REST filter and replaces the URL with the
canonical `documentId` route.

*When starting the server, or reloading the page without cache, it will take a while to load. This is normal and expected. Loading times will be faster on the live production version.*

🔨 Check, test and build the project before submitting a PR

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e     # needs a running frontend + CMS + Meilisearch
```

## Contributing

🔧 Check [CONTRIBUTING.md](/CONTRIBUTING.md) for more information.
