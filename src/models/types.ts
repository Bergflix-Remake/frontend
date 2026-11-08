/**
 * Hand-written types for the Strapi 5 REST API.
 *
 * Strapi 5 returns flattened documents (no `data.attributes` wrapper), uses
 * `documentId` for routing and keeps the numeric `id` for legacy links.
 */

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Media {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  formats?: Record<string, MediaFormat> | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider?: string;
  provider_metadata?: unknown;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string | null;
}

export interface Contributor {
  id: number;
  documentId: string;
  name: string;
  bio?: string | null;
  href?: string | null;
  image?: Media | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Studio {
  id: number;
  documentId: string;
  name: string;
  info?: string | null;
  url?: string | null;
  role?: string | null;
  logo?: Media | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ComponentCommonContributor {
  id: number;
  role: string;
  character?: string | null;
  contributor?: Contributor | null;
}

export interface Video {
  id: number;
  documentId: string;
  title: string;
  title_image?: Media | null;
  background_image?: Media | null;
  youtube_url: string;
  rating?: number | null;
  series?: Serie | null;
  year: string;
  age: number;
  genre: string;
  thumbnail?: Media | null;
  original?: boolean | null;
  contributors?: ComponentCommonContributor[] | null;
  episode?: number | null;
  outro_start?: number | null;
  transcript?: string | null;
  description?: string | null;
  studios?: Studio[] | null;
  slug?: string | null;
  is_external?: boolean | null;
  locale?: string;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Serie {
  id: number;
  documentId: string;
  title: string;
  title_image?: Media | null;
  background_image?: Media | null;
  rating?: number | null;
  videos?: Video[] | null;
  thumbnail?: Media | null;
  original?: boolean | null;
  year: string;
  genre: string;
  age: number;
  contributors?: ComponentCommonContributor[] | null;
  description?: string | null;
  locale?: string;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface ComponentCollectionVideo {
  id: number;
  __component: 'collection.video';
  title?: string | null;
  video?: Video | null;
}

export interface ComponentCollectionSerie {
  id: number;
  __component: 'collection.serie';
  title?: string | null;
  serie?: Serie | null;
}

export type CollectionEntry =
  ComponentCollectionVideo | ComponentCollectionSerie;

export interface Collection {
  id: number;
  documentId: string;
  title: string;
  title_image?: Media | null;
  entries?: CollectionEntry[] | null;
  locale?: string;
  publishedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Badge {
  id: number;
  documentId: string;
  name: string;
  description?: string | null;
  icon?: Media | null;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface BadgeComponent {
  id: number;
  awarded?: string | null;
  badge?: Badge | null;
}

export interface UsersPermissionsUser {
  id: number;
  documentId: string;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  admin?: boolean;
  selected_badge?: number | null;
  badge?: BadgeComponent[] | null;
  image?: Media | null;
  role?: { id: number; name: string; type: string } | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Featured {
  id: number;
  documentId: string;
  video?: Video | null;
}

export interface Imprint {
  id: number;
  documentId: string;
  impressum?: string | null;
  privacy?: string | null;
  terms?: string | null;
}

export interface PaginationMeta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export interface StrapiCollectionResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface StrapiSingleResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

// Backwards-compatible aliases for the names used across the app. These are
// plain Strapi 5 document types, not the old generated GraphQL entities.
export type VideoEntity = Video;
export type SerieEntity = Serie;
export type CollectionEntity = Collection;
export type FeaturedEntity = Featured;
export type ImprintEntity = Imprint;
export type UploadFile = Media;
export type ResponseCollectionMeta = PaginationMeta;
