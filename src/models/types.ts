export type Maybe<T> = T | null;
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
  AboutPageDynamicZoneInput: any;
  HomepagePageDynamicZoneInput: any;
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
  and?: Maybe<Array<Maybe<Scalars['ID']>>>;
  or?: Maybe<Array<Maybe<Scalars['ID']>>>;
  not?: Maybe<IdFilterInput>;
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  startsWith?: Maybe<Scalars['ID']>;
  endsWith?: Maybe<Scalars['ID']>;
  contains?: Maybe<Scalars['ID']>;
  notContains?: Maybe<Scalars['ID']>;
  containsi?: Maybe<Scalars['ID']>;
  notContainsi?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  between?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BooleanFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  or?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  not?: Maybe<BooleanFilterInput>;
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  startsWith?: Maybe<Scalars['Boolean']>;
  endsWith?: Maybe<Scalars['Boolean']>;
  contains?: Maybe<Scalars['Boolean']>;
  notContains?: Maybe<Scalars['Boolean']>;
  containsi?: Maybe<Scalars['Boolean']>;
  notContainsi?: Maybe<Scalars['Boolean']>;
  gt?: Maybe<Scalars['Boolean']>;
  gte?: Maybe<Scalars['Boolean']>;
  lt?: Maybe<Scalars['Boolean']>;
  lte?: Maybe<Scalars['Boolean']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  between?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type StringFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['String']>>>;
  or?: Maybe<Array<Maybe<Scalars['String']>>>;
  not?: Maybe<StringFilterInput>;
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  notContains?: Maybe<Scalars['String']>;
  containsi?: Maybe<Scalars['String']>;
  notContainsi?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  between?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type IntFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Int']>>>;
  or?: Maybe<Array<Maybe<Scalars['Int']>>>;
  not?: Maybe<IntFilterInput>;
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  startsWith?: Maybe<Scalars['Int']>;
  endsWith?: Maybe<Scalars['Int']>;
  contains?: Maybe<Scalars['Int']>;
  notContains?: Maybe<Scalars['Int']>;
  containsi?: Maybe<Scalars['Int']>;
  notContainsi?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  between?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FloatFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Float']>>>;
  or?: Maybe<Array<Maybe<Scalars['Float']>>>;
  not?: Maybe<FloatFilterInput>;
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  startsWith?: Maybe<Scalars['Float']>;
  endsWith?: Maybe<Scalars['Float']>;
  contains?: Maybe<Scalars['Float']>;
  notContains?: Maybe<Scalars['Float']>;
  containsi?: Maybe<Scalars['Float']>;
  notContainsi?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  between?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type DateFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['Date']>>>;
  or?: Maybe<Array<Maybe<Scalars['Date']>>>;
  not?: Maybe<DateFilterInput>;
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  startsWith?: Maybe<Scalars['Date']>;
  endsWith?: Maybe<Scalars['Date']>;
  contains?: Maybe<Scalars['Date']>;
  notContains?: Maybe<Scalars['Date']>;
  containsi?: Maybe<Scalars['Date']>;
  notContainsi?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Date']>>>;
  between?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DateTimeFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  or?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  not?: Maybe<DateTimeFilterInput>;
  eq?: Maybe<Scalars['DateTime']>;
  ne?: Maybe<Scalars['DateTime']>;
  startsWith?: Maybe<Scalars['DateTime']>;
  endsWith?: Maybe<Scalars['DateTime']>;
  contains?: Maybe<Scalars['DateTime']>;
  notContains?: Maybe<Scalars['DateTime']>;
  containsi?: Maybe<Scalars['DateTime']>;
  notContainsi?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  between?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type JsonFilterInput = {
  and?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  or?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  not?: Maybe<JsonFilterInput>;
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  startsWith?: Maybe<Scalars['JSON']>;
  endsWith?: Maybe<Scalars['JSON']>;
  contains?: Maybe<Scalars['JSON']>;
  notContains?: Maybe<Scalars['JSON']>;
  containsi?: Maybe<Scalars['JSON']>;
  notContainsi?: Maybe<Scalars['JSON']>;
  gt?: Maybe<Scalars['JSON']>;
  gte?: Maybe<Scalars['JSON']>;
  lt?: Maybe<Scalars['JSON']>;
  lte?: Maybe<Scalars['JSON']>;
  null?: Maybe<Scalars['Boolean']>;
  notNull?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  between?: Maybe<Array<Maybe<Scalars['JSON']>>>;
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

export type ComponentCommonTextBlock = {
  __typename?: 'ComponentCommonTextBlock';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentMoviePoster = {
  __typename?: 'ComponentMoviePoster';
  id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  poster_img: UploadFileEntityResponse;
  is_series: Scalars['Boolean'];
};

export type UploadFileFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  alternativeText?: Maybe<StringFilterInput>;
  caption?: Maybe<StringFilterInput>;
  width?: Maybe<IntFilterInput>;
  height?: Maybe<IntFilterInput>;
  formats?: Maybe<JsonFilterInput>;
  hash?: Maybe<StringFilterInput>;
  ext?: Maybe<StringFilterInput>;
  mime?: Maybe<StringFilterInput>;
  size?: Maybe<FloatFilterInput>;
  url?: Maybe<StringFilterInput>;
  previewUrl?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  provider_metadata?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFileFiltersInput>>>;
  not?: Maybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
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

export type I18NLocaleFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  code?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  or?: Maybe<Array<Maybe<I18NLocaleFiltersInput>>>;
  not?: Maybe<I18NLocaleFiltersInput>;
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
  id?: Maybe<IdFilterInput>;
  action?: Maybe<StringFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: Maybe<UsersPermissionsPermissionFiltersInput>;
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
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  permissions?: Maybe<UsersPermissionsPermissionFiltersInput>;
  users?: Maybe<UsersPermissionsUserFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsRoleFiltersInput>>>;
  not?: Maybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  filters?: Maybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  id?: Maybe<IdFilterInput>;
  username?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  provider?: Maybe<StringFilterInput>;
  password?: Maybe<StringFilterInput>;
  resetPasswordToken?: Maybe<StringFilterInput>;
  confirmationToken?: Maybe<StringFilterInput>;
  confirmed?: Maybe<BooleanFilterInput>;
  blocked?: Maybe<BooleanFilterInput>;
  role?: Maybe<UsersPermissionsRoleFiltersInput>;
  watchlist?: Maybe<VideoFiltersInput>;
  admin?: Maybe<BooleanFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  or?: Maybe<Array<Maybe<UsersPermissionsUserFiltersInput>>>;
  not?: Maybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  watchlist?: Maybe<Array<Maybe<Scalars['ID']>>>;
  admin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
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
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsUserWatchlistArgs = {
  filters?: Maybe<VideoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
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

export type AboutPageDynamicZone = ComponentCommonTextBlock | ComponentCommonButton | Error;


export type AboutInput = {
  page?: Maybe<Array<Scalars['AboutPageDynamicZoneInput']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type About = {
  __typename?: 'About';
  page: Array<Maybe<AboutPageDynamicZone>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<AboutRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type AboutLocalizationsArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<About>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutRelationResponseCollection = {
  __typename?: 'AboutRelationResponseCollection';
  data: Array<AboutEntity>;
};

export type ComingSoonInput = {
  Title?: Maybe<Scalars['String']>;
  Text?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
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
  publicationState?: Maybe<PublicationState>;
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

export type HomepagePageDynamicZone = ComponentCommonTextBlock | ComponentCommonButton | Error;


export type HomepageInput = {
  page?: Maybe<Array<Scalars['HomepagePageDynamicZoneInput']>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Homepage = {
  __typename?: 'Homepage';
  page?: Maybe<Array<Maybe<HomepagePageDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<HomepageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type HomepageLocalizationsArgs = {
  publicationState?: Maybe<PublicationState>;
};

export type HomepageEntity = {
  __typename?: 'HomepageEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<Homepage>;
};

export type HomepageEntityResponse = {
  __typename?: 'HomepageEntityResponse';
  data?: Maybe<HomepageEntity>;
};

export type HomepageRelationResponseCollection = {
  __typename?: 'HomepageRelationResponseCollection';
  data: Array<HomepageEntity>;
};

export type ImprintInput = {
  impressum?: Maybe<Scalars['String']>;
  privacy?: Maybe<Scalars['String']>;
  terms?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
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

export type KnownUrlFiltersInput = {
  id?: Maybe<IdFilterInput>;
  url?: Maybe<StringFilterInput>;
  title?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<KnownUrlFiltersInput>>>;
  or?: Maybe<Array<Maybe<KnownUrlFiltersInput>>>;
  not?: Maybe<KnownUrlFiltersInput>;
};

export type KnownUrlInput = {
  url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type KnownUrl = {
  __typename?: 'KnownUrl';
  url: Scalars['String'];
  title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type KnownUrlEntity = {
  __typename?: 'KnownUrlEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<KnownUrl>;
};

export type KnownUrlEntityResponse = {
  __typename?: 'KnownUrlEntityResponse';
  data?: Maybe<KnownUrlEntity>;
};

export type KnownUrlEntityResponseCollection = {
  __typename?: 'KnownUrlEntityResponseCollection';
  data: Array<KnownUrlEntity>;
  meta: ResponseCollectionMeta;
};

export type SerieFiltersInput = {
  id?: Maybe<IdFilterInput>;
  Title?: Maybe<StringFilterInput>;
  rating?: Maybe<FloatFilterInput>;
  description?: Maybe<StringFilterInput>;
  videos?: Maybe<VideoFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  localizations?: Maybe<SerieFiltersInput>;
  locale?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<SerieFiltersInput>>>;
  or?: Maybe<Array<Maybe<SerieFiltersInput>>>;
  not?: Maybe<SerieFiltersInput>;
};

export type SerieInput = {
  Title?: Maybe<Scalars['String']>;
  title_image?: Maybe<Scalars['ID']>;
  background_image?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  videos?: Maybe<Array<Maybe<Scalars['ID']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Serie = {
  __typename?: 'Serie';
  Title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  background_image?: Maybe<UploadFileEntityResponse>;
  rating?: Maybe<Scalars['Float']>;
  description: Scalars['String'];
  videos?: Maybe<VideoRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<SerieRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type SerieVideosArgs = {
  filters?: Maybe<VideoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};


export type SerieLocalizationsArgs = {
  filters?: Maybe<SerieFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
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

export type SuggestedContentInput = {
  videos?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type SuggestedContent = {
  __typename?: 'SuggestedContent';
  videos?: Maybe<VideoRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type SuggestedContentVideosArgs = {
  filters?: Maybe<VideoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};

export type SuggestedContentEntity = {
  __typename?: 'SuggestedContentEntity';
  id?: Maybe<Scalars['ID']>;
  attributes?: Maybe<SuggestedContent>;
};

export type SuggestedContentEntityResponse = {
  __typename?: 'SuggestedContentEntityResponse';
  data?: Maybe<SuggestedContentEntity>;
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
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  youtube_url?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  rating?: Maybe<FloatFilterInput>;
  series?: Maybe<SerieFiltersInput>;
  on_watchlist?: Maybe<UsersPermissionsUserFiltersInput>;
  year?: Maybe<DateFilterInput>;
  age?: Maybe<IntFilterInput>;
  genre?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  localizations?: Maybe<VideoFiltersInput>;
  locale?: Maybe<StringFilterInput>;
  and?: Maybe<Array<Maybe<VideoFiltersInput>>>;
  or?: Maybe<Array<Maybe<VideoFiltersInput>>>;
  not?: Maybe<VideoFiltersInput>;
};

export type VideoInput = {
  title?: Maybe<Scalars['String']>;
  title_image?: Maybe<Scalars['ID']>;
  background_image?: Maybe<Scalars['ID']>;
  youtube_url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  series?: Maybe<Scalars['ID']>;
  on_watchlist?: Maybe<Array<Maybe<Scalars['ID']>>>;
  year?: Maybe<Scalars['Date']>;
  age?: Maybe<Scalars['Int']>;
  genre?: Maybe<Enum_Video_Genre>;
  publishedAt?: Maybe<Scalars['DateTime']>;
};

export type Video = {
  __typename?: 'Video';
  title: Scalars['String'];
  title_image?: Maybe<UploadFileEntityResponse>;
  background_image?: Maybe<UploadFileEntityResponse>;
  youtube_url: Scalars['String'];
  description: Scalars['String'];
  rating?: Maybe<Scalars['Float']>;
  series?: Maybe<SerieEntityResponse>;
  on_watchlist?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  year?: Maybe<Scalars['Date']>;
  age: Scalars['Int'];
  genre: Enum_Video_Genre;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<VideoRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type VideoOn_WatchlistArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VideoLocalizationsArgs = {
  filters?: Maybe<VideoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
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

export type GenericMorph = ComponentCommonButton | ComponentCommonTextBlock | ComponentMoviePoster | UploadFile | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | About | ComingSoon | Homepage | Imprint | KnownUrl | Serie | SuggestedContent | Video;

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
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
  page?: Maybe<Scalars['Int']>;
  pageSize?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  about?: Maybe<AboutEntityResponse>;
  comingSoon?: Maybe<ComingSoonEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  imprint?: Maybe<ImprintEntityResponse>;
  knownUrl?: Maybe<KnownUrlEntityResponse>;
  knownUrls?: Maybe<KnownUrlEntityResponseCollection>;
  serie?: Maybe<SerieEntityResponse>;
  series?: Maybe<SerieEntityResponseCollection>;
  suggestedContent?: Maybe<SuggestedContentEntityResponse>;
  video?: Maybe<VideoEntityResponse>;
  videos?: Maybe<VideoEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryUploadFileArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: Maybe<I18NLocaleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: Maybe<UsersPermissionsRoleFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: Maybe<UsersPermissionsUserFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAboutArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryComingSoonArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryHomepageArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryImprintArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryKnownUrlArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryKnownUrlsArgs = {
  filters?: Maybe<KnownUrlFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySerieArgs = {
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QuerySeriesArgs = {
  filters?: Maybe<SerieFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryVideoArgs = {
  id?: Maybe<Scalars['ID']>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryVideosArgs = {
  filters?: Maybe<VideoFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  updateAbout?: Maybe<AboutEntityResponse>;
  deleteAbout?: Maybe<AboutEntityResponse>;
  updateComingSoon?: Maybe<ComingSoonEntityResponse>;
  deleteComingSoon?: Maybe<ComingSoonEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  updateImprint?: Maybe<ImprintEntityResponse>;
  deleteImprint?: Maybe<ImprintEntityResponse>;
  createKnownUrl?: Maybe<KnownUrlEntityResponse>;
  updateKnownUrl?: Maybe<KnownUrlEntityResponse>;
  deleteKnownUrl?: Maybe<KnownUrlEntityResponse>;
  createSerie?: Maybe<SerieEntityResponse>;
  updateSerie?: Maybe<SerieEntityResponse>;
  deleteSerie?: Maybe<SerieEntityResponse>;
  updateSuggestedContent?: Maybe<SuggestedContentEntityResponse>;
  deleteSuggestedContent?: Maybe<SuggestedContentEntityResponse>;
  createVideo?: Maybe<VideoEntityResponse>;
  updateVideo?: Maybe<VideoEntityResponse>;
  deleteVideo?: Maybe<VideoEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createAboutLocalization?: Maybe<AboutEntityResponse>;
  createComingSoonLocalization?: Maybe<ComingSoonEntityResponse>;
  createHomepageLocalization?: Maybe<HomepageEntityResponse>;
  createSerieLocalization?: Maybe<SerieEntityResponse>;
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
  /** Update an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
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


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateComingSoonArgs = {
  data: ComingSoonInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteComingSoonArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateHomepageArgs = {
  data: HomepageInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteHomepageArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateImprintArgs = {
  data: ImprintInput;
};


export type MutationCreateKnownUrlArgs = {
  data: KnownUrlInput;
};


export type MutationUpdateKnownUrlArgs = {
  id: Scalars['ID'];
  data: KnownUrlInput;
};


export type MutationDeleteKnownUrlArgs = {
  id: Scalars['ID'];
};


export type MutationCreateSerieArgs = {
  data: SerieInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSerieArgs = {
  id: Scalars['ID'];
  data: SerieInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteSerieArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateSuggestedContentArgs = {
  data: SuggestedContentInput;
};


export type MutationCreateVideoArgs = {
  data: VideoInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateVideoArgs = {
  id: Scalars['ID'];
  data: VideoInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteVideoArgs = {
  id: Scalars['ID'];
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: Maybe<FileInfoInput>;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationCreateAboutLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<AboutInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateComingSoonLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<ComingSoonInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateHomepageLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<HomepageInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateSerieLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<SerieInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationCreateVideoLocalizationArgs = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<VideoInput>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
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


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};
