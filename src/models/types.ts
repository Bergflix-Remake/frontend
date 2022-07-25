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
  ApplicationQuestionItemsDynamicZoneInput: any;
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

export type ComponentApplicationCodeblock = {
  __typename?: 'ComponentApplicationCodeblock';
  id: Scalars['ID'];
  filename: Scalars['String'];
  editable: Scalars['Boolean'];
  content?: Maybe<Scalars['String']>;
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

export type ComponentFeaturedFilm = {
  __typename?: 'ComponentFeaturedFilm';
  id: Scalars['ID'];
  video?: Maybe<VideoEntityResponse>;
};

export type ComponentFeaturedSeries = {
  __typename?: 'ComponentFeaturedSeries';
  id: Scalars['ID'];
  serie?: Maybe<SerieEntityResponse>;
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
  folder?: Maybe<UploadFolderFiltersInput>;
  folderPath?: Maybe<StringFilterInput>;
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
  folder?: Maybe<Scalars['ID']>;
  folderPath?: Maybe<Scalars['String']>;
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
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  pathId?: Maybe<IntFilterInput>;
  parent?: Maybe<UploadFolderFiltersInput>;
  children?: Maybe<UploadFolderFiltersInput>;
  files?: Maybe<UploadFileFiltersInput>;
  path?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<UploadFolderFiltersInput>>>;
  or?: Maybe<Array<Maybe<UploadFolderFiltersInput>>>;
  not?: Maybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: Maybe<Scalars['String']>;
  pathId?: Maybe<Scalars['Int']>;
  parent?: Maybe<Scalars['ID']>;
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
  path?: Maybe<Scalars['String']>;
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
  filters?: Maybe<UploadFolderFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: Maybe<UploadFileFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type AwesomeHelpHelpFiltersInput = {
  id?: Maybe<IdFilterInput>;
  contentType?: Maybe<StringFilterInput>;
  path?: Maybe<StringFilterInput>;
  helpContent?: Maybe<StringFilterInput>;
  fieldName?: Maybe<StringFilterInput>;
  containerType?: Maybe<StringFilterInput>;
  zoneName?: Maybe<StringFilterInput>;
  componentName?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<AwesomeHelpHelpFiltersInput>>>;
  or?: Maybe<Array<Maybe<AwesomeHelpHelpFiltersInput>>>;
  not?: Maybe<AwesomeHelpHelpFiltersInput>;
};

export type AwesomeHelpHelpInput = {
  contentType?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  helpContent?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  containerType?: Maybe<Scalars['String']>;
  zoneName?: Maybe<Scalars['String']>;
  componentName?: Maybe<Scalars['String']>;
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

export type EzformsSubmissionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  score?: Maybe<StringFilterInput>;
  data?: Maybe<JsonFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<EzformsSubmissionFiltersInput>>>;
  or?: Maybe<Array<Maybe<EzformsSubmissionFiltersInput>>>;
  not?: Maybe<EzformsSubmissionFiltersInput>;
};

export type EzformsSubmissionInput = {
  score?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
};

export type EzformsSubmission = {
  __typename?: 'EzformsSubmission';
  score?: Maybe<Scalars['String']>;
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
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  email?: Maybe<StringFilterInput>;
  number?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<EzformsRecipientFiltersInput>>>;
  or?: Maybe<Array<Maybe<EzformsRecipientFiltersInput>>>;
  not?: Maybe<EzformsRecipientFiltersInput>;
};

export type EzformsRecipientInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
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
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  type?: Maybe<StringFilterInput>;
  collectionX?: Maybe<StringFilterInput>;
  collectionXAttribute?: Maybe<StringFilterInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<GraphsBuilderGraphFiltersInput>>>;
  or?: Maybe<Array<Maybe<GraphsBuilderGraphFiltersInput>>>;
  not?: Maybe<GraphsBuilderGraphFiltersInput>;
};

export type GraphsBuilderGraphInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Enum_Graphsbuildergraph_Type>;
  collectionX?: Maybe<Scalars['String']>;
  collectionXAttribute?: Maybe<Scalars['String']>;
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

export type ApplicationFieldFiltersInput = {
  id?: Maybe<IdFilterInput>;
  name?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  applications?: Maybe<ApplicationSessionFiltersInput>;
  questions?: Maybe<ApplicationQuestionFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<ApplicationFieldFiltersInput>>>;
  or?: Maybe<Array<Maybe<ApplicationFieldFiltersInput>>>;
  not?: Maybe<ApplicationFieldFiltersInput>;
};

export type ApplicationFieldInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  applications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  questions?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  filters?: Maybe<ApplicationSessionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ApplicationFieldQuestionsArgs = {
  filters?: Maybe<ApplicationQuestionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
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

export type ApplicationQuestionItemsDynamicZone = ComponentApplicationTweet | ComponentApplicationCodeblock | Error;


export type ApplicationQuestionFiltersInput = {
  id?: Maybe<IdFilterInput>;
  title?: Maybe<StringFilterInput>;
  description?: Maybe<StringFilterInput>;
  field?: Maybe<ApplicationFieldFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  publishedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<ApplicationQuestionFiltersInput>>>;
  or?: Maybe<Array<Maybe<ApplicationQuestionFiltersInput>>>;
  not?: Maybe<ApplicationQuestionFiltersInput>;
};

export type ApplicationQuestionInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Scalars['ApplicationQuestionItemsDynamicZoneInput']>>;
  field?: Maybe<Scalars['ID']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
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
  id?: Maybe<IdFilterInput>;
  identifier?: Maybe<StringFilterInput>;
  completed?: Maybe<BooleanFilterInput>;
  response?: Maybe<JsonFilterInput>;
  name?: Maybe<StringFilterInput>;
  field?: Maybe<ApplicationFieldFiltersInput>;
  createdAt?: Maybe<DateTimeFilterInput>;
  updatedAt?: Maybe<DateTimeFilterInput>;
  and?: Maybe<Array<Maybe<ApplicationSessionFiltersInput>>>;
  or?: Maybe<Array<Maybe<ApplicationSessionFiltersInput>>>;
  not?: Maybe<ApplicationSessionFiltersInput>;
};

export type ApplicationSessionInput = {
  identifier?: Maybe<Scalars['String']>;
  completed?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['ID']>;
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

export type FeaturedInput = {
  video?: Maybe<Scalars['ID']>;
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
  id?: Maybe<IdFilterInput>;
  Title?: Maybe<StringFilterInput>;
  rating?: Maybe<FloatFilterInput>;
  description?: Maybe<StringFilterInput>;
  videos?: Maybe<VideoFiltersInput>;
  original?: Maybe<BooleanFilterInput>;
  year?: Maybe<DateFilterInput>;
  genre?: Maybe<StringFilterInput>;
  age?: Maybe<IntFilterInput>;
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
  thumbnail?: Maybe<Scalars['ID']>;
  original?: Maybe<Scalars['Boolean']>;
  year?: Maybe<Scalars['Date']>;
  genre?: Maybe<Enum_Serie_Genre>;
  age?: Maybe<Scalars['Int']>;
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
  thumbnail: UploadFileEntityResponse;
  original?: Maybe<Scalars['Boolean']>;
  year: Scalars['Date'];
  genre: Enum_Serie_Genre;
  age: Scalars['Int'];
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
  original?: Maybe<BooleanFilterInput>;
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
  thumbnail?: Maybe<Scalars['ID']>;
  original?: Maybe<Scalars['Boolean']>;
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
  thumbnail: UploadFileEntityResponse;
  original?: Maybe<Scalars['Boolean']>;
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

export type GenericMorph = ComponentApplicationCodeblock | ComponentApplicationTweet | ComponentCommonButton | ComponentCommonTextBlock | ComponentFeaturedFilm | ComponentFeaturedSeries | ComponentMoviePoster | UploadFile | UploadFolder | AwesomeHelpHelp | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | EzformsSubmission | EzformsRecipient | GraphsBuilderGraph | About | ApplicationField | ApplicationQuestion | ApplicationSession | ComingSoon | Featured | Homepage | Imprint | Serie | Video;

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
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
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
  about?: Maybe<AboutEntityResponse>;
  applicationField?: Maybe<ApplicationFieldEntityResponse>;
  applicationFields?: Maybe<ApplicationFieldEntityResponseCollection>;
  applicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  applicationQuestions?: Maybe<ApplicationQuestionEntityResponseCollection>;
  applicationSession?: Maybe<ApplicationSessionEntityResponse>;
  applicationSessions?: Maybe<ApplicationSessionEntityResponseCollection>;
  comingSoon?: Maybe<ComingSoonEntityResponse>;
  featured?: Maybe<FeaturedEntityResponse>;
  homepage?: Maybe<HomepageEntityResponse>;
  imprint?: Maybe<ImprintEntityResponse>;
  serie?: Maybe<SerieEntityResponse>;
  series?: Maybe<SerieEntityResponseCollection>;
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


export type QueryUploadFolderArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: Maybe<UploadFolderFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAwesomeHelpHelpArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryAwesomeHelpHelpsArgs = {
  filters?: Maybe<AwesomeHelpHelpFiltersInput>;
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


export type QueryEzformsSubmissionArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEzformsSubmissionsArgs = {
  filters?: Maybe<EzformsSubmissionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryEzformsRecipientArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryEzformsRecipientsArgs = {
  filters?: Maybe<EzformsRecipientFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryGraphsBuilderGraphArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGraphsBuilderGraphsArgs = {
  filters?: Maybe<GraphsBuilderGraphFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryAboutArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type QueryApplicationFieldArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryApplicationFieldsArgs = {
  filters?: Maybe<ApplicationFieldFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryApplicationQuestionArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryApplicationQuestionsArgs = {
  filters?: Maybe<ApplicationQuestionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryApplicationSessionArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryApplicationSessionsArgs = {
  filters?: Maybe<ApplicationSessionFiltersInput>;
  pagination?: Maybe<PaginationArg>;
  sort?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
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
  updateAbout?: Maybe<AboutEntityResponse>;
  deleteAbout?: Maybe<AboutEntityResponse>;
  createApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  updateApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  deleteApplicationField?: Maybe<ApplicationFieldEntityResponse>;
  createApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  updateApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  deleteApplicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  createApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  updateApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  deleteApplicationSession?: Maybe<ApplicationSessionEntityResponse>;
  updateComingSoon?: Maybe<ComingSoonEntityResponse>;
  deleteComingSoon?: Maybe<ComingSoonEntityResponse>;
  updateFeatured?: Maybe<FeaturedEntityResponse>;
  deleteFeatured?: Maybe<FeaturedEntityResponse>;
  updateHomepage?: Maybe<HomepageEntityResponse>;
  deleteHomepage?: Maybe<HomepageEntityResponse>;
  updateImprint?: Maybe<ImprintEntityResponse>;
  deleteImprint?: Maybe<ImprintEntityResponse>;
  createSerie?: Maybe<SerieEntityResponse>;
  updateSerie?: Maybe<SerieEntityResponse>;
  deleteSerie?: Maybe<SerieEntityResponse>;
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
  /** Delete an existing user */
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


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteAboutArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
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


export type MutationUpdateComingSoonArgs = {
  data: ComingSoonInput;
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationDeleteComingSoonArgs = {
  locale?: Maybe<Scalars['I18NLocaleCode']>;
};


export type MutationUpdateFeaturedArgs = {
  data: FeaturedInput;
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
