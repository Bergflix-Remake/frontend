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

export type ComponentMovieVideo = {
  __typename?: 'ComponentMovieVideo';
  id: Scalars['ID'];
  video?: Maybe<VideoEntityResponse>;
  num?: Maybe<Scalars['Int']>;
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
  patreon?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
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
  patreon?: InputMaybe<Scalars['Boolean']>;
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
  patreon?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UsersPermissionsUserWatchlistArgs = {
  filters?: InputMaybe<VideoFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publicationState?: InputMaybe<PublicationState>;
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
  and?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EzformsSubmissionFiltersInput>>>;
  not?: InputMaybe<EzformsSubmissionFiltersInput>;
};

export type EzformsSubmissionInput = {
  score?: InputMaybe<Scalars['String']>;
  formName?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['JSON']>;
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
  and?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EzformsRecipientFiltersInput>>>;
  not?: InputMaybe<EzformsRecipientFiltersInput>;
};

export type EzformsRecipientInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['String']>;
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
  and?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<GraphsBuilderGraphFiltersInput>>>;
  not?: InputMaybe<GraphsBuilderGraphFiltersInput>;
};

export type GraphsBuilderGraphInput = {
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Enum_Graphsbuildergraph_Type>;
  collectionX?: InputMaybe<Scalars['String']>;
  collectionXAttribute?: InputMaybe<Scalars['String']>;
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

export type ApplicationFieldFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  applications?: InputMaybe<ApplicationSessionFiltersInput>;
  questions?: InputMaybe<ApplicationQuestionFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ApplicationFieldFiltersInput>>>;
  not?: InputMaybe<ApplicationFieldFiltersInput>;
};

export type ApplicationFieldInput = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  applications?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  questions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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
  Title?: InputMaybe<Scalars['String']>;
  Text?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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
  and?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<ContributorFiltersInput>>>;
  not?: InputMaybe<ContributorFiltersInput>;
};

export type ContributorInput = {
  name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  bio?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<IdFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  videos?: InputMaybe<VideoFiltersInput>;
  original?: InputMaybe<BooleanFilterInput>;
  year?: InputMaybe<DateFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  age?: InputMaybe<IntFilterInput>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<SerieFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<SerieFiltersInput>>>;
  not?: InputMaybe<SerieFiltersInput>;
};

export type SerieInput = {
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  background_image?: InputMaybe<Scalars['ID']>;
  rating?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  original?: InputMaybe<Scalars['Boolean']>;
  year?: InputMaybe<Scalars['Date']>;
  genre?: InputMaybe<Enum_Serie_Genre>;
  age?: InputMaybe<Scalars['Int']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Serie = {
  __typename?: 'Serie';
  title: Scalars['String'];
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
  contributors?: Maybe<Array<Maybe<ComponentCommonContributor>>>;
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
  description?: InputMaybe<StringFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  series?: InputMaybe<SerieFiltersInput>;
  on_watchlist?: InputMaybe<UsersPermissionsUserFiltersInput>;
  year?: InputMaybe<DateFilterInput>;
  age?: InputMaybe<IntFilterInput>;
  genre?: InputMaybe<StringFilterInput>;
  original?: InputMaybe<BooleanFilterInput>;
  contributors?: InputMaybe<ComponentCommonContributorFiltersInput>;
  episode?: InputMaybe<IntFilterInput>;
  outro_start?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  localizations?: InputMaybe<VideoFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<VideoFiltersInput>>>;
  not?: InputMaybe<VideoFiltersInput>;
};

export type VideoInput = {
  title?: InputMaybe<Scalars['String']>;
  title_image?: InputMaybe<Scalars['ID']>;
  background_image?: InputMaybe<Scalars['ID']>;
  youtube_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Float']>;
  series?: InputMaybe<Scalars['ID']>;
  on_watchlist?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  year?: InputMaybe<Scalars['Date']>;
  age?: InputMaybe<Scalars['Int']>;
  genre?: InputMaybe<Enum_Video_Genre>;
  thumbnail?: InputMaybe<Scalars['ID']>;
  original?: InputMaybe<Scalars['Boolean']>;
  contributors?: InputMaybe<Array<InputMaybe<ComponentCommonContributorInput>>>;
  episode?: InputMaybe<Scalars['Int']>;
  outro_start?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
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
  contributors: Array<Maybe<ComponentCommonContributor>>;
  episode?: Maybe<Scalars['Int']>;
  outro_start?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<VideoRelationResponseCollection>;
  locale?: Maybe<Scalars['String']>;
};


export type VideoOn_WatchlistArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type VideoContributorsArgs = {
  filters?: InputMaybe<ComponentCommonContributorFiltersInput>;
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

export type GenericMorph = ComponentApplicationCodeblock | ComponentApplicationImage | ComponentApplicationTweet | ComponentCommonButton | ComponentCommonContributor | ComponentCommonTextBlock | ComponentFeaturedFilm | ComponentFeaturedSeries | ComponentMoviePoster | ComponentMovieVideo | UploadFile | UploadFolder | AwesomeHelpHelp | I18NLocale | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | EzformsSubmission | EzformsRecipient | GraphsBuilderGraph | ApplicationField | ApplicationQuestion | ApplicationSession | ComingSoon | Contributor | Featured | Imprint | Serie | Video;

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
  applicationField?: Maybe<ApplicationFieldEntityResponse>;
  applicationFields?: Maybe<ApplicationFieldEntityResponseCollection>;
  applicationQuestion?: Maybe<ApplicationQuestionEntityResponse>;
  applicationQuestions?: Maybe<ApplicationQuestionEntityResponseCollection>;
  applicationSession?: Maybe<ApplicationSessionEntityResponse>;
  applicationSessions?: Maybe<ApplicationSessionEntityResponseCollection>;
  comingSoon?: Maybe<ComingSoonEntityResponse>;
  contributor?: Maybe<ContributorEntityResponse>;
  contributors?: Maybe<ContributorEntityResponseCollection>;
  featured?: Maybe<FeaturedEntityResponse>;
  imprint?: Maybe<ImprintEntityResponse>;
  serie?: Maybe<SerieEntityResponse>;
  series?: Maybe<SerieEntityResponseCollection>;
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
  createContributor?: Maybe<ContributorEntityResponse>;
  updateContributor?: Maybe<ContributorEntityResponse>;
  deleteContributor?: Maybe<ContributorEntityResponse>;
  updateFeatured?: Maybe<FeaturedEntityResponse>;
  deleteFeatured?: Maybe<FeaturedEntityResponse>;
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
  createComingSoonLocalization?: Maybe<ComingSoonEntityResponse>;
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
