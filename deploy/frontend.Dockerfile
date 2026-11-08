# syntax=docker/dockerfile:1
FROM node:22.20.0-bookworm AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN HUSKY=0 npm ci --ignore-scripts --no-audit --no-fund && npm rebuild esbuild
COPY . .
ARG VITE_API_URL=http://localhost:8080
ARG VITE_MEDIA_URL=http://localhost:8080
ARG VITE_CDN_URL=https://cdn.bergflix.de
ARG VITE_MEILISEARCH_HOST=http://localhost:8080/meili
ARG VITE_MEILISEARCH_API_KEY=
ARG VITE_MEILISEARCH_INDEX=video
ENV VITE_API_URL=$VITE_API_URL \
    VITE_MEDIA_URL=$VITE_MEDIA_URL \
    VITE_CDN_URL=$VITE_CDN_URL \
    VITE_MEILISEARCH_HOST=$VITE_MEILISEARCH_HOST \
    VITE_MEILISEARCH_API_KEY=$VITE_MEILISEARCH_API_KEY \
    VITE_MEILISEARCH_INDEX=$VITE_MEILISEARCH_INDEX
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
