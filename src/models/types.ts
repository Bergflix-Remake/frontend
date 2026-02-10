export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  ApplicationQuestionItemsDynamicZoneInput: any;
  CollectionEntriesDynamicZoneInput: any;
  PfpReferenceDynamicZoneInput: any;
  /** A string used to identify an i18n locale */
  I18NLocaleCode: any;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int'];
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  pageCount: Scalars['Int'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  nei?: InputMaybe<Scalars['ID']>;
  startsWith?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  contains?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nei?: InputMaybe<Scalars['Boolean']>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Scalars['Boolean']>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  nei?: InputMaybe<Scalars['String']>;
  startsWith?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nei?: InputMaybe<Scalars['Int']>;
  startsWith?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  contains?: InputMaybe<Scalars['Int']>;
  notContains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nei?: InputMaybe<Scalars['Float']>;
  startsWith?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  contains?: InputMaybe<Scalars['Float']>;
  notContains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  not?: InputMaybe<DateFilterInput>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nei?: InputMaybe<Scalars['Date']>;
  startsWith?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  contains?: InputMaybe<Scalars['Date']>;
  notContains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  nei?: InputMaybe<Scalars['DateTime']>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  contains?: InputMaybe<Scalars['DateTime']>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  nei?: InputMaybe<Scalars['JSON']>;
  startsWith?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  contains?: InputMaybe<Scalars['JSON']>;
  notContains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  null?: InputMaybe<Scalars['Boolean']>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ComponentApplicationCodeblock = {
  __typename?: 'ComponentApplicationCodeblock';
  id: Scalars['ID'];
  filename: Scalars['String'];
  editable: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
};

export type ComponentApplicationImage = {
  __typename?: 'ComponentApplicationImage';
  id: Scalars['ID'];
  src: Scalars['String'];
  alt: Scalars['String'];
};

export type ComponentApplicationTweet = {
  __typename?: 'ComponentApplicationTweet';
  id: Scalars['ID'];
  content: Scalars['String'];
  username: Scalars['String'];
  handle: Scalars['String'];
  replies?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type ComponentCollectionSerie = {
  __typename?: 'ComponentCollectionSerie';
  id: Scalars['ID'];
  serie?: Maybe<SerieEntityResponse>;
};

export type ComponentCollectionVideo = {
  __typename?: 'ComponentCollectionVideo';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  video?: Maybe<VideoEntityResponse>;
};

export enum Enum_Componentcommonbutton_Type {
  Button = 'button',
  Link = 'link',
  Linkout = 'linkout'
}

export type ComponentCommonButton = {
  __typename?: 'ComponentCommonButton';
  id: Scalars['ID'];
  type: Enum_Componentcommonbutton_Type;
  to: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentCommonContributorFiltersInput = {
  contributor?: InputMaybe<ContributorFiltersInput>;
  role?: InputMaybe<StringFilterInput>;
  character?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentCommonContributorFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonContributorFiltersInput>>>;
  not?: InputMaybe<ComponentCommonContributorFiltersInput>;
};

export type ComponentCommonContributorInput = {
  id?: InputMaybe<Scalars['ID']>;
  contributor?: InputMaybe<Scalars['ID']>;
  role?: InputMaybe<Scalars['String']>;
  character?: InputMaybe<Scalars['String']>;
};

export type ComponentCommonContributor = {
  __typename?: 'ComponentCommonContributor';
  id: Scalars['ID'];
  contributor?: Maybe<ContributorEntityResponse>;
  role: Scalars['String'];
  character: Scalars['String'];
};

export type ComponentCommonTextBlock = {
  __typename?: 'ComponentCommonTextBlock';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentFeaturedFilm = {
  __typename?: 'ComponentFeaturedFilm';
  id: Scalars['ID'];
  item?: Maybe<VideoEntityResponse>;
};

export type ComponentFeaturedSeries = {
  __typename?: 'ComponentFeaturedSeries';
  id: Scalars['ID'];
  item?: Maybe<SerieEntityResponse>;
};

export type ComponentMoviePoster = {
  __typename?: 'ComponentMoviePoster';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  poster_img: UploadFileEntityResponse;
  is_series: Scalars['Boolean'];
};

export type ComponentMovieVideo = {
  __typename?: 'ComponentMovieVideo';
  id: Scalars['ID'];
  video?: Maybe<VideoEntityResponse>;
  num?: Maybe<Scalars['Int']>;
};

export type ComponentUserBadgeFiltersInput = {
  awarded?: InputMaybe<DateFilterInput>;
  badge?: InputMaybe<BadgeFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentUserBadgeFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ComponentUserBadgeFiltersInput>>>;
  not?: InputMaybe<ComponentUserBadgeFiltersInput>;
};

export type ComponentUserBadgeInput = {
  id?: InputMaybe<Scalars['ID']>;
  awarded?: InputMaybe<Scalars['Date']>;
  badge?: InputMaybe<Scalars['ID']>;
};

export type ComponentUserBadge = {
  __typename?: 'ComponentUserBadge';
  id: Scalars['ID'];
  awarded: Scalars['Date'];
  badge?: Maybe<BadgeEntityResponse>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  mime?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
  parent?: InputMaybe<Scalars['ID']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  path?: InputMaybe<Scalars['String']>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  name: Scalars['String'];
  pathId: Scalars['Int'];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type ContentReleasesReleaseFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
};

export type ContentReleasesReleaseInput = {
  name?: InputMaybe<Scalars['String']>;
  releasedAt?: InputMaybe<Scalars['DateTime']>;
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  name: Scalars['String'];
  releasedAt?: Maybe<Scalars['DateTime']>;
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ContentReleasesRelease>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export type ContentReleasesReleaseActionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
};

export type ContentReleasesReleaseActionInput = {
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
  contentType?: InputMaybe<Scalars['String']>;
  release?: InputMaybe<Scalars['ID']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  type: Enum_Contentreleasesreleaseaction_Type;
  entry?: Maybe<GenericMorph>;
  contentType: Scalars['String'];
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ContentReleasesReleaseAction>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type AwesomeHelpHelpFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  contentType?: InputMaybe<StringFilterInput>;
  path?: InputMaybe<StringFilterInput>;
  helpContent?: InputMaybe<StringFilterInput>;
  fieldName?: InputMaybe<StringFilterInput>;
  containerType?: InputMaybe<StringFilterInput>;
  zoneName?: InputMaybe<StringFilterInput>;
  componentName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<AwesomeHelpHelpFiltersInput>>>;
  not?: InputMaybe<AwesomeHelpHelpFiltersInput>;
};

export type AwesomeHelpHelpInput = {
  contentType?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  helpContent?: InputMaybe<Scalars['String']>;
  fieldName?: InputMaybe<Scalars['String']>;
  containerType?: InputMaybe<Scalars['String']>;
  zoneName?: InputMaybe<Scalars['String']>;
  componentName?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type AwesomeHelpHelp = {
  __typename?: 'AwesomeHelpHelp';
  contentType?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  helpContent?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  zoneName?: Maybe<Scalars['String']>;
  componentName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AwesomeHelpHelpEntity = {
  __typename?: 'AwesomeHelpHelpEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<AwesomeHelpHelp>;
};

export type AwesomeHelpHelpEntityResponse = {
  __typename?: 'AwesomeHelpHelpEntityResponse';
  data?: Maybe<AwesomeHelpHelpEntity>;
};

export type AwesomeHelpHelpEntityResponseCollection = {
  __typename?: 'AwesomeHelpHelpEntityResponseCollection';
  data: Array<AwesomeHelpHelpEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  watchlist?: InputMaybe<VideoFiltersInput>;
  admin?: InputMaybe<BooleanFilterInput>;
  badge?: InputMaybe<ComponentUserBadgeFiltersInput>;
  selected_badge?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  blocked?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['ID']>;
  watchlist?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  admin?: InputMaybe<Scalars['Boolean']>;
  image?: InputMaybe<Scalars['ID']>;
  badge?: InputMaybe<Array<InputMaybe<ComponentUserBadgeInput>>>;
  selected_badge?: InputMaybe<Scalars['Int']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  watchlist?: Maybe<VideoRelationResponseCollection>;
  admin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<UploadFileEntityResponse>;
  badge?: Maybe<Array<Maybe<ComponentUserBadge>>>;
  selected_badge?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsUserWatchlistArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type UsersPermissionsUserBadgeArgs = {
  filters?: InputMaybe<ComponentUserBadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type EzformsSubmissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  score?: InputMaybe<StringFilterInput>;
  formName?: InputMaybe<StringFilterInput>;
  data?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
};

export type EzformsSubmissionInput = {
  score?: InputMaybe<Scalars['String']>;
  formName?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['JSON']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  score?: Maybe<Scalars['String']>;
  formName?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsSubmissionEntity = {
  __typename?: 'EzformsSubmissionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<EzformsSubmission>;
};

export type EzformsSubmissionEntityResponse = {
  __typename?: 'EzformsSubmissionEntityResponse';
  data?: Maybe<EzformsSubmissionEntity>;
};

export type EzformsSubmissionEntityResponseCollection = {
  __typename?: 'EzformsSubmissionEntityResponseCollection';
  data: Array<EzformsSubmissionEntity>;
  meta: ResponseCollectionMeta;
};

export type EzformsRecipientFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  number?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
};

export type EzformsRecipientInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type EzformsRecipient = {
  __typename?: 'EzformsRecipient';
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type EzformsRecipientEntity = {
  __typename?: 'EzformsRecipientEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<EzformsRecipient>;
};

export type EzformsRecipientEntityResponse = {
  __typename?: 'EzformsRecipientEntityResponse';
  data?: Maybe<EzformsRecipientEntity>;
};

export type EzformsRecipientEntityResponseCollection = {
  __typename?: 'EzformsRecipientEntityResponseCollection';
  data: Array<EzformsRecipientEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Graphsbuildergraph_Type {
  Pie = 'pie',
  Bar = 'bar',
  Line = 'line',
  DateLine = 'dateLine'
}

export type GraphsBuilderGraphFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  collectionX?: InputMaybe<StringFilterInput>;
  collectionXAttribute?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  not?: InputMaybe<GraphsBuilderGraphFiltersInput>;
};

export type GraphsBuilderGraphInput = {
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Graphsbuildergraph_Type>;
  collectionX?: InputMaybe<Scalars['String']>;
  collectionXAttribute?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type GraphsBuilderGraph = {
  __typename?: 'GraphsBuilderGraph';
  title: Scalars['String'];
  type: Enum_Graphsbuildergraph_Type;
  collectionX: Scalars['String'];
  collectionXAttribute?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GraphsBuilderGraphEntity = {
  __typename?: 'GraphsBuilderGraphEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<GraphsBuilderGraph>;
};

export type GraphsBuilderGraphEntityResponse = {
  __typename?: 'GraphsBuilderGraphEntityResponse';
  data?: Maybe<GraphsBuilderGraphEntity>;
};

export type GraphsBuilderGraphEntityResponseCollection = {
  __typename?: 'GraphsBuilderGraphEntityResponseCollection';
  data: Array<GraphsBuilderGraphEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Sitemapsitemap_Type {
  DefaultHreflang = 'default_hreflang',
  Index = 'index'
}

export type SitemapSitemapFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  sitemap_string?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  delta?: InputMaybe<IntFilterInput>;
  link_count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  not?: InputMaybe<SitemapSitemapFiltersInput>;
};

export type SitemapSitemapInput = {
  sitemap_string?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Sitemapsitemap_Type>;
  delta?: InputMaybe<Scalars['Int']>;
  link_count?: InputMaybe<Scalars['Int']>;
};

export type SitemapSitemap = {
  __typename?: 'SitemapSitemap';
  sitemap_string: Scalars['String'];
  name: Scalars['String'];
  type?: Maybe<Enum_Sitemapsitemap_Type>;
  delta?: Maybe<Scalars['Int']>;
  link_count?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SitemapSitemapEntity = {
  __typename?: 'SitemapSitemapEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<SitemapSitemap>;
};

export type SitemapSitemapEntityResponse = {
  __typename?: 'SitemapSitemapEntityResponse';
  data?: Maybe<SitemapSitemapEntity>;
};

export type SitemapSitemapEntityResponseCollection = {
  __typename?: 'SitemapSitemapEntityResponseCollection';
  data: Array<SitemapSitemapEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapCacheFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  sitemap_json?: InputMaybe<JsonFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  sitemap_id?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  not?: InputMaybe<SitemapSitemapCacheFiltersInput>;
};

export type SitemapSitemapCacheInput = {
  sitemap_json?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  sitemap_id?: InputMaybe<Scalars['Int']>;
};

export type SitemapSitemapCache = {
  __typename?: 'SitemapSitemapCache';
  sitemap_json: Scalars['JSON'];
  name: Scalars['String'];
  sitemap_id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SitemapSitemapCacheEntity = {
  __typename?: 'SitemapSitemapCacheEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<SitemapSitemapCache>;
};

export type SitemapSitemapCacheEntityResponse = {
  __typename?: 'SitemapSitemapCacheEntityResponse';
  data?: Maybe<SitemapSitemapCacheEntity>;
};

export type SitemapSitemapCacheEntityResponseCollection = {
  __typename?: 'SitemapSitemapCacheEntityResponseCollection';
  data: Array<SitemapSitemapCacheEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationFieldFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  applications?: InputMaybe<ApplicationSessionFiltersInput>;
  questions?: InputMaybe<ApplicationQuestionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  not?: InputMaybe<ApplicationFieldFiltersInput>;
};

export type ApplicationFieldInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ApplicationField = {
  __typename?: 'ApplicationField';
  name: Scalars['String'];
  description: Scalars['String'];
  applications?: Maybe<ApplicationSessionRelationResponseCollection>;
  questions?: Maybe<ApplicationQuestionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ApplicationFieldApplicationsArgs = {
  filters?: InputMaybe<ApplicationSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ApplicationFieldQuestionsArgs = {
  filters?: InputMaybe<ApplicationQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type ApplicationFieldEntity = {
  __typename?: 'ApplicationFieldEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ApplicationField>;
};

export type ApplicationFieldEntityResponse = {
  __typename?: 'ApplicationFieldEntityResponse';
  data?: Maybe<ApplicationFieldEntity>;
};

export type ApplicationFieldEntityResponseCollection = {
  __typename?: 'ApplicationFieldEntityResponseCollection';
  data: Array<ApplicationFieldEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationQuestionItemsDynamicZone = ComponentApplicationCodeblock | ComponentApplicationImage | ComponentApplicationTweet | Error;

export type ApplicationQuestionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  field?: InputMaybe<ApplicationFieldFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ApplicationQuestionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ApplicationQuestionFiltersInput>>>;
  not?: InputMaybe<ApplicationQuestionFiltersInput>;
};

export type ApplicationQuestionInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<Scalars['ApplicationQuestionItemsDynamicZoneInput']>>;
  field?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ApplicationQuestion = {
  __typename?: 'ApplicationQuestion';
  title: Scalars['String'];
  description: Scalars['String'];
  items: Array<Maybe<ApplicationQuestionItemsDynamicZone>>;
  field?: Maybe<ApplicationFieldEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplicationQuestionEntity = {
  __typename?: 'ApplicationQuestionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ApplicationQuestion>;
};

export type ApplicationQuestionEntityResponse = {
  __typename?: 'ApplicationQuestionEntityResponse';
  data?: Maybe<ApplicationQuestionEntity>;
};

export type ApplicationQuestionEntityResponseCollection = {
  __typename?: 'ApplicationQuestionEntityResponseCollection';
  data: Array<ApplicationQuestionEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationQuestionRelationResponseCollection = {
  __typename?: 'ApplicationQuestionRelationResponseCollection';
  data: Array<ApplicationQuestionEntity>;
};

export type ApplicationSessionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  identifier?: InputMaybe<StringFilterInput>;
  completed?: InputMaybe<BooleanFilterInput>;
  response?: InputMaybe<JsonFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  field?: InputMaybe<ApplicationFieldFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ApplicationSessionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ApplicationSessionFiltersInput>>>;
  not?: InputMaybe<ApplicationSessionFiltersInput>;
};

export type ApplicationSessionInput = {
  identifier?: InputMaybe<Scalars['String']>;
  completed?: InputMaybe<Scalars['Boolean']>;
  response?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['ID']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ApplicationSession = {
  __typename?: 'ApplicationSession';
  identifier: Scalars['String'];
  completed: Scalars['Boolean'];
  response?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  field?: Maybe<ApplicationFieldEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ApplicationSessionEntity = {
  __typename?: 'ApplicationSessionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ApplicationSession>;
};

export type ApplicationSessionEntityResponse = {
  __typename?: 'ApplicationSessionEntityResponse';
  data?: Maybe<ApplicationSessionEntity>;
};

export type ApplicationSessionEntityResponseCollection = {
  __typename?: 'ApplicationSessionEntityResponseCollection';
  data: Array<ApplicationSessionEntity>;
  meta: ResponseCollectionMeta;
};

export type ApplicationSessionRelationResponseCollection = {
  __typename?: 'ApplicationSessionRelationResponseCollection';
  data: Array<ApplicationSessionEntity>;
};

export type BadgeFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<BadgeFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BadgeFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<BadgeFiltersInput>>>;
  not?: InputMaybe<BadgeFiltersInput>;
};

export type BadgeInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['ID']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Badge = {
  __typename?: 'Badge';
  name: Scalars['String'];
  description: Scalars['String'];
  icon: UploadFileEntityResponse;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<BadgeRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type BadgeLocalizationsArgs = {
  filters?: InputMaybe<BadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type BadgeEntity = {
  __typename?: 'BadgeEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Badge>;
};

export type BadgeEntityResponse = {
  __typename?: 'BadgeEntityResponse';
  data?: Maybe<BadgeEntity>;
};

export type BadgeEntityResponseCollection = {
  __typename?: 'BadgeEntityResponseCollection';
  data: Array<BadgeEntity>;
  meta: ResponseCollectionMeta;
};

export type BadgeRelationResponseCollection = {
  __typename?: 'BadgeRelationResponseCollection';
  data: Array<BadgeEntity>;
};

export type CollectionEntriesDynamicZone = ComponentCollectionSerie | ComponentCollectionVideo | Error;

export type CollectionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<CollectionFiltersInput>>>;
  not?: InputMaybe<CollectionFiltersInput>;
};

export type CollectionInput = {
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  entries?: InputMaybe<Array<Scalars['CollectionEntriesDynamicZoneInput']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Collection = {
  __typename?: 'Collection';
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  entries: Array<Maybe<CollectionEntriesDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type CollectionEntity = {
  __typename?: 'CollectionEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Collection>;
};

export type CollectionEntityResponse = {
  __typename?: 'CollectionEntityResponse';
  data?: Maybe<CollectionEntity>;
};

export type CollectionEntityResponseCollection = {
  __typename?: 'CollectionEntityResponseCollection';
  data: Array<CollectionEntity>;
  meta: ResponseCollectionMeta;
};

export type ComingSoonInput = {
  Title?: InputMaybe<Scalars['String']>;
  Text?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type ComingSoon = {
  __typename?: 'ComingSoon';
  Title: Scalars['String'];
  Text: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<ComingSoonRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type ComingSoonLocalizationsArgs = {
  publicationState?: InputMaybe<PublicationState>;
};

export type ComingSoonEntity = {
  __typename?: 'ComingSoonEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<ComingSoon>;
};

export type ComingSoonEntityResponse = {
  __typename?: 'ComingSoonEntityResponse';
  data?: Maybe<ComingSoonEntity>;
};

export type ComingSoonRelationResponseCollection = {
  __typename?: 'ComingSoonRelationResponseCollection';
  data: Array<ComingSoonEntity>;
};

export type ContributorFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  bio?: InputMaybe<StringFilterInput>;
  href?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  not?: InputMaybe<ContributorFiltersInput>;
};

export type ContributorInput = {
  name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Contributor = {
  __typename?: 'Contributor';
  name: Scalars['String'];
  image: UploadFileEntityResponse;
  bio: Scalars['String'];
  href?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContributorEntity = {
  __typename?: 'ContributorEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Contributor>;
};

export type ContributorEntityResponse = {
  __typename?: 'ContributorEntityResponse';
  data?: Maybe<ContributorEntity>;
};

export type ContributorEntityResponseCollection = {
  __typename?: 'ContributorEntityResponseCollection';
  data: Array<ContributorEntity>;
  meta: ResponseCollectionMeta;
};

export type FeaturedInput = {
  video?: InputMaybe<Scalars['ID']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Featured = {
  __typename?: 'Featured';
  video?: Maybe<VideoEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeaturedEntity = {
  __typename?: 'FeaturedEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Featured>;
};

export type FeaturedEntityResponse = {
  __typename?: 'FeaturedEntityResponse';
  data?: Maybe<FeaturedEntity>;
};

export type ImprintInput = {
  impressum?: InputMaybe<Scalars['String']>;
  privacy?: InputMaybe<Scalars['String']>;
  terms?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Imprint = {
  __typename?: 'Imprint';
  impressum: Scalars['String'];
  privacy: Scalars['String'];
  terms: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type ImprintEntity = {
  __typename?: 'ImprintEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Imprint>;
};

export type ImprintEntityResponse = {
  __typename?: 'ImprintEntityResponse';
  data?: Maybe<ImprintEntity>;
};

export type PfpReferenceDynamicZone = ComponentFeaturedFilm | ComponentFeaturedSeries | Error;

export type PfpFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  unlockable?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PfpFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<PfpFiltersInput>>>;
  not?: InputMaybe<PfpFiltersInput>;
};

export type PfpInput = {
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['ID']>;
  unlockable?: InputMaybe<Scalars['Boolean']>;
  reference?: InputMaybe<Array<Scalars['PfpReferenceDynamicZoneInput']>>;
  silhouette?: InputMaybe<Scalars['ID']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Pfp = {
  __typename?: 'Pfp';
  name: Scalars['String'];
  picture: UploadFileEntityResponse;
  unlockable?: Maybe<Scalars['Boolean']>;
  reference?: Maybe<Array<Maybe<PfpReferenceDynamicZone>>>;
  silhouette?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PfpEntity = {
  __typename?: 'PfpEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Pfp>;
};

export type PfpEntityResponse = {
  __typename?: 'PfpEntityResponse';
  data?: Maybe<PfpEntity>;
};

export type PfpEntityResponseCollection = {
  __typename?: 'PfpEntityResponseCollection';
  data: Array<PfpEntity>;
  meta: ResponseCollectionMeta;
};

export enum Enum_Serie_Genre {
  Action = 'Action',
  Adventure = 'Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Fantasy = 'Fantasy',
  History = 'History',
  Horror = 'Horror',
  Music = 'Music',
  Mystery = 'Mystery',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  War = 'War'
}

export type SerieFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  videos?: InputMaybe<VideoFiltersInput>;
  original?: InputMaybe<BooleanFilterInput>;
  year?: InputMaybe<DateFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  age?: InputMaybe<IntFilterInput>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  description?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<SerieFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  not?: InputMaybe<SerieFiltersInput>;
};

export type SerieInput = {
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  background_image?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Float']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  original?: InputMaybe<Scalars['Boolean']>;
  year?: InputMaybe<Scalars['Date']>;
  genre?: InputMaybe<Enum_Serie_Genre>;
  age?: InputMaybe<Scalars['Int']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  description?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Serie = {
  __typename?: 'Serie';
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  background_image?: Maybe<UploadFileEntityResponse>;
  rating?: Maybe<Scalars['Float']>;
  videos?: Maybe<VideoRelationResponseCollection>;
  thumbnail: UploadFileEntityResponse;
  original?: Maybe<Scalars['Boolean']>;
  year: Scalars['Date'];
  genre: Enum_Serie_Genre;
  age: Scalars['Int'];
  contributors?: Maybe<Array<Maybe<ComponentCommonContributor>>>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<SerieRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type SerieVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type SerieContributorsArgs = {
  filters?: InputMaybe<ComponentCommonContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type SerieLocalizationsArgs = {
  filters?: InputMaybe<SerieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type SerieEntity = {
  __typename?: 'SerieEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Serie>;
};

export type SerieEntityResponse = {
  __typename?: 'SerieEntityResponse';
  data?: Maybe<SerieEntity>;
};

export type SerieEntityResponseCollection = {
  __typename?: 'SerieEntityResponseCollection';
  data: Array<SerieEntity>;
  meta: ResponseCollectionMeta;
};

export type SerieRelationResponseCollection = {
  __typename?: 'SerieRelationResponseCollection';
  data: Array<SerieEntity>;
};

export type StudioFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  info?: InputMaybe<StringFilterInput>;
  videos?: InputMaybe<VideoFiltersInput>;
  url?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<StudioFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StudioFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<StudioFiltersInput>>>;
  not?: InputMaybe<StudioFiltersInput>;
};

export type StudioInput = {
  name?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['ID']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  url?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Studio = {
  __typename?: 'Studio';
  name: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  logo: UploadFileEntityResponse;
  videos?: Maybe<VideoRelationResponseCollection>;
  url?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<StudioRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type StudioVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type StudioLocalizationsArgs = {
  filters?: InputMaybe<StudioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudioEntity = {
  __typename?: 'StudioEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Studio>;
};

export type StudioEntityResponse = {
  __typename?: 'StudioEntityResponse';
  data?: Maybe<StudioEntity>;
};

export type StudioEntityResponseCollection = {
  __typename?: 'StudioEntityResponseCollection';
  data: Array<StudioEntity>;
  meta: ResponseCollectionMeta;
};

export type StudioRelationResponseCollection = {
  __typename?: 'StudioRelationResponseCollection';
  data: Array<StudioEntity>;
};

export enum Enum_Video_Genre {
  Action = 'Action',
  Adventure = 'Adventure',
  Animation = 'Animation',
  Comedy = 'Comedy',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  Fantasy = 'Fantasy',
  History = 'History',
  Horror = 'Horror',
  Music = 'Music',
  Mystery = 'Mystery',
  Romance = 'Romance',
  SciFi = 'SciFi',
  Thriller = 'Thriller',
  War = 'War'
}

export type VideoFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  youtube_url?: InputMaybe<StringFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  series?: InputMaybe<SerieFiltersInput>;
  year?: InputMaybe<DateFilterInput>;
  age?: InputMaybe<IntFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  original?: InputMaybe<BooleanFilterInput>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  episode?: InputMaybe<IntFilterInput>;
  outro_start?: InputMaybe<IntFilterInput>;
  transcript?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  studios?: InputMaybe<StudioFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  is_external?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<VideoFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  not?: InputMaybe<VideoFiltersInput>;
};

export type VideoInput = {
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  background_image?: InputMaybe<Scalars['ID']>;
  youtube_url?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  series?: InputMaybe<Scalars['ID']>;
  year?: InputMaybe<Scalars['Date']>;
  age?: InputMaybe<Scalars['Int']>;
  genre?: InputMaybe<Enum_Video_Genre>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  original?: InputMaybe<Scalars['Boolean']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  episode?: InputMaybe<Scalars['Int']>;
  outro_start?: InputMaybe<Scalars['Int']>;
  transcript?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  studios?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  is_external?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']>;
};

export type Video = {
  __typename?: 'Video';
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  background_image?: Maybe<UploadFileEntityResponse>;
  youtube_url: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  series?: Maybe<SerieEntityResponse>;
  year: Scalars['Date'];
  age: Scalars['Int'];
  genre: Enum_Video_Genre;
  thumbnail: UploadFileEntityResponse;
  original?: Maybe<Scalars['Boolean']>;
  contributors: Array<Maybe<ComponentCommonContributor>>;
  episode?: Maybe<Scalars['Int']>;
  outro_start?: Maybe<Scalars['Int']>;
  transcript?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  studios?: Maybe<StudioRelationResponseCollection>;
  slug: Scalars['String'];
  is_external?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<VideoRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type VideoContributorsArgs = {
  filters?: InputMaybe<ComponentCommonContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VideoStudiosArgs = {
  filters?: InputMaybe<StudioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VideoLocalizationsArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type VideoEntity = {
  __typename?: 'VideoEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Video>;
};

export type VideoEntityResponse = {
  __typename?: 'VideoEntityResponse';
  data?: Maybe<VideoEntity>;
};

export type VideoEntityResponseCollection = {
  __typename?: 'VideoEntityResponseCollection';
  data: Array<VideoEntity>;
  meta: ResponseCollectionMeta;
};

export type VideoRelationResponseCollection = {
  __typename?: 'VideoRelationResponseCollection';
  data: Array<VideoEntity>;
};

export type GenericMorph = ComponentApplicationCodeblock | ComponentApplicationImage | ComponentApplicationTweet | ComponentCollectionSerie | ComponentCollectionVideo | ComponentCommonButton | ComponentCommonContributor | ComponentCommonTextBlock | ComponentFeaturedFilm | ComponentFeaturedSeries | ComponentMoviePoster | ComponentMovieVideo | ComponentUserBadge | UploadFile | UploadFolder | ContentReleasesRelease | ContentReleasesReleaseAction | AwesomeHelpHelp | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | EzformsSubmission | EzformsRecipient | GraphsBuilderGraph | SitemapSitemap | SitemapSitemapCache | ApplicationField | ApplicationQuestion | ApplicationSession | Badge | Collection | ComingSoon | Contributor | Featured | Imprint | Pfp | Serie | Studio | Video;

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']>;
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  awesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  awesomeHelpHelps?: Maybe<AwesomeHelpHelpEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  ezformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  ezformsSubmissions?: Maybe<EzformsSubmissionEntityResponseCollection>;
  ezformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  ezformsRecipients?: Maybe<EzformsRecipientEntityResponseCollection>;
  graphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  graphsBuilderGraphs?: Maybe<GraphsBuilderGraphEntityResponseCollection>;
  sitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  sitemapSitemaps?: Maybe<SitemapSitemapEntityResponseCollection>;
  sitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  sitemapSitemapCaches?: Maybe<SitemapSitemapCacheEntityResponseCollection>;
  applicationField?: Maybe<ApplicationFieldEntityResponse>;
  applicationFields?: Maybe<ApplicationFieldEntityResponseCollection>;
  applicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  applicationQuestions?: Maybe<ApplicationQuestionEntityResponseCollection>;
  applicationSession?: Maybe<ApplicationSessionEntityResponse>;
  applicationSessions?: Maybe<ApplicationSessionEntityResponseCollection>;
  badge?: Maybe<BadgeEntityResponse>;
  badges?: Maybe<BadgeEntityResponseCollection>;
  collection?: Maybe<CollectionEntityResponse>;
  collections?: Maybe<CollectionEntityResponseCollection>;
  comingSoon?: Maybe<ComingSoonEntityResponse>;
  contributor?: Maybe<ContributorEntityResponse>;
  contributors?: Maybe<ContributorEntityResponseCollection>;
  featured?: Maybe<FeaturedEntityResponse>;
  imprint?: Maybe<ImprintEntityResponse>;
  pfp?: Maybe<PfpEntityResponse>;
  pfps?: Maybe<PfpEntityResponseCollection>;
  serie?: Maybe<SerieEntityResponse>;
  series?: Maybe<SerieEntityResponseCollection>;
  studio?: Maybe<StudioEntityResponse>;
  studios?: Maybe<StudioEntityResponseCollection>;
  video?: Maybe<VideoEntityResponse>;
  videos?: Maybe<VideoEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryAwesomeHelpHelpArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAwesomeHelpHelpsArgs = {
  filters?: InputMaybe<AwesomeHelpHelpFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsSubmissionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: InputMaybe<EzformsSubmissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryEzformsRecipientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: InputMaybe<EzformsRecipientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryGraphsBuilderGraphArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGraphsBuilderGraphsArgs = {
  filters?: InputMaybe<GraphsBuilderGraphFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemapSitemapArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySitemapSitemapsArgs = {
  filters?: InputMaybe<SitemapSitemapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySitemapSitemapCacheArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySitemapSitemapCachesArgs = {
  filters?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApplicationFieldArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationFieldsArgs = {
  filters?: InputMaybe<ApplicationFieldFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryApplicationQuestionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationQuestionsArgs = {
  filters?: InputMaybe<ApplicationQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryApplicationSessionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationSessionsArgs = {
  filters?: InputMaybe<ApplicationSessionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBadgeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryBadgesArgs = {
  filters?: InputMaybe<BadgeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryCollectionsArgs = {
  filters?: InputMaybe<CollectionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryComingSoonArgs = {
  publicationState?: InputMaybe<PublicationState>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryContributorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContributorsArgs = {
  filters?: InputMaybe<ContributorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryImprintArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryPfpArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPfpsArgs = {
  filters?: InputMaybe<PfpFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySerieArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QuerySeriesArgs = {
  filters?: InputMaybe<SerieFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryStudioArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryStudiosArgs = {
  filters?: InputMaybe<StudioFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryVideoArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type QueryVideosArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  updateAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  deleteAwesomeHelpHelp?: Maybe<AwesomeHelpHelpEntityResponse>;
  createEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  updateEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  deleteEzformsSubmission?: Maybe<EzformsSubmissionEntityResponse>;
  createEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  updateEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  deleteEzformsRecipient?: Maybe<EzformsRecipientEntityResponse>;
  createGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  updateGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  deleteGraphsBuilderGraph?: Maybe<GraphsBuilderGraphEntityResponse>;
  createSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  updateSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  deleteSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  createSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  updateSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  deleteSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  createApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  updateApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  deleteApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  createApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  updateApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  deleteApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  createApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  updateApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  deleteApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  createBadge?: Maybe<BadgeEntityResponse>;
  updateBadge?: Maybe<BadgeEntityResponse>;
  deleteBadge?: Maybe<BadgeEntityResponse>;
  createCollection?: Maybe<CollectionEntityResponse>;
  updateCollection?: Maybe<CollectionEntityResponse>;
  deleteCollection?: Maybe<CollectionEntityResponse>;
  updateComingSoon?: Maybe<ComingSoonEntityResponse>;
  deleteComingSoon?: Maybe<ComingSoonEntityResponse>;
  createContributor?: Maybe<ContributorEntityResponse>;
  updateContributor?: Maybe<ContributorEntityResponse>;
  deleteContributor?: Maybe<ContributorEntityResponse>;
  updateFeatured?: Maybe<FeaturedEntityResponse>;
  deleteFeatured?: Maybe<FeaturedEntityResponse>;
  updateImprint?: Maybe<ImprintEntityResponse>;
  deleteImprint?: Maybe<ImprintEntityResponse>;
  createPfp?: Maybe<PfpEntityResponse>;
  updatePfp?: Maybe<PfpEntityResponse>;
  deletePfp?: Maybe<PfpEntityResponse>;
  createSerie?: Maybe<SerieEntityResponse>;
  updateSerie?: Maybe<SerieEntityResponse>;
  deleteSerie?: Maybe<SerieEntityResponse>;
  createStudio?: Maybe<StudioEntityResponse>;
  updateStudio?: Maybe<StudioEntityResponse>;
  deleteStudio?: Maybe<StudioEntityResponse>;
  createVideo?: Maybe<VideoEntityResponse>;
  updateVideo?: Maybe<VideoEntityResponse>;
  deleteVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createBadgeLocalization?: Maybe<BadgeEntityResponse>;
  createComingSoonLocalization?: Maybe<ComingSoonEntityResponse>;
  createSerieLocalization?: Maybe<SerieEntityResponse>;
  createStudioLocalization?: Maybe<StudioEntityResponse>;
  createVideoLocalization?: Maybe<VideoEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID'];
  data: UploadFileInput;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID'];
  data: UploadFolderInput;
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationUpdateContentReleasesReleaseArgs = {
  id: Scalars['ID'];
  data: ContentReleasesReleaseInput;
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID'];
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  id: Scalars['ID'];
  data: ContentReleasesReleaseActionInput;
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAwesomeHelpHelpArgs = {
  data: AwesomeHelpHelpInput;
};


export type MutationUpdateAwesomeHelpHelpArgs = {
  id: Scalars['ID'];
  data: AwesomeHelpHelpInput;
};


export type MutationDeleteAwesomeHelpHelpArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEzformsSubmissionArgs = {
  data: EzformsSubmissionInput;
};


export type MutationUpdateEzformsSubmissionArgs = {
  id: Scalars['ID'];
  data: EzformsSubmissionInput;
};


export type MutationDeleteEzformsSubmissionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEzformsRecipientArgs = {
  data: EzformsRecipientInput;
};


export type MutationUpdateEzformsRecipientArgs = {
  id: Scalars['ID'];
  data: EzformsRecipientInput;
};


export type MutationDeleteEzformsRecipientArgs = {
  id: Scalars['ID'];
};


export type MutationCreateGraphsBuilderGraphArgs = {
  data: GraphsBuilderGraphInput;
};


export type MutationUpdateGraphsBuilderGraphArgs = {
  id: Scalars['ID'];
  data: GraphsBuilderGraphInput;
};


export type MutationDeleteGraphsBuilderGraphArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
};


export type MutationUpdateSitemapSitemapArgs = {
  id: Scalars['ID'];
  data: SitemapSitemapInput;
};


export type MutationDeleteSitemapSitemapArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
};


export type MutationUpdateSitemapSitemapCacheArgs = {
  id: Scalars['ID'];
  data: SitemapSitemapCacheInput;
};


export type MutationDeleteSitemapSitemapCacheArgs = {
  id: Scalars['ID'];
};


export type MutationCreateApplicationFieldArgs = {
  data: ApplicationFieldInput;
};


export type MutationUpdateApplicationFieldArgs = {
  id: Scalars['ID'];
  data: ApplicationFieldInput;
};


export type MutationDeleteApplicationFieldArgs = {
  id: Scalars['ID'];
};


export type MutationCreateApplicationQuestionArgs = {
  data: ApplicationQuestionInput;
};


export type MutationUpdateApplicationQuestionArgs = {
  id: Scalars['ID'];
  data: ApplicationQuestionInput;
};


export type MutationDeleteApplicationQuestionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateApplicationSessionArgs = {
  data: ApplicationSessionInput;
};


export type MutationUpdateApplicationSessionArgs = {
  id: Scalars['ID'];
  data: ApplicationSessionInput;
};


export type MutationDeleteApplicationSessionArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBadgeArgs = {
  data: BadgeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateBadgeArgs = {
  id: Scalars['ID'];
  data: BadgeInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteBadgeArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateCollectionArgs = {
  data: CollectionInput;
};


export type MutationUpdateCollectionArgs = {
  id: Scalars['ID'];
  data: CollectionInput;
};


export type MutationDeleteCollectionArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateComingSoonArgs = {
  data: ComingSoonInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteComingSoonArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateContributorArgs = {
  data: ContributorInput;
};


export type MutationUpdateContributorArgs = {
  id: Scalars['ID'];
  data: ContributorInput;
};


export type MutationDeleteContributorArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFeaturedArgs = {
  data: FeaturedInput;
};


export type MutationUpdateImprintArgs = {
  data: ImprintInput;
};


export type MutationCreatePfpArgs = {
  data: PfpInput;
};


export type MutationUpdatePfpArgs = {
  id: Scalars['ID'];
  data: PfpInput;
};


export type MutationDeletePfpArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSerieArgs = {
  data: SerieInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSerieArgs = {
  id: Scalars['ID'];
  data: SerieInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSerieArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateStudioArgs = {
  data: StudioInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateStudioArgs = {
  id: Scalars['ID'];
  data: StudioInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteStudioArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateVideoArgs = {
  id: Scalars['ID'];
  data: VideoInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']>;
  ref?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateBadgeLocalizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<BadgeInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateComingSoonLocalizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<ComingSoonInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSerieLocalizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<SerieInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateStudioLocalizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<StudioInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateVideoLocalizationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  data?: InputMaybe<VideoInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsRoleInput;
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID'];
  data: UsersPermissionsUserInput;
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
