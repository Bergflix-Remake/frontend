import { Scalars, Maybe } from './types';
export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  data: null;
  error: Error;
};

export type Error = {
  __typename?: 'Error';
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  details?: any;
};
