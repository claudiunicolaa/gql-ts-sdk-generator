import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type BookInput = {
  author: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook: Book;
};


export type MutationAddBookArgs = {
  input: BookInput;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
};

export type AddBookMutationVariables = Exact<{
  input: BookInput;
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook: { __typename?: 'Book', id: string, title: string, author: string } };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title: string, author: string }> };


export const AddBookDocument = gql`
    mutation addBook($input: BookInput!) {
  addBook(input: $input) {
    id
    title
    author
  }
}
    `;
export const BooksDocument = gql`
    query books {
  books {
    id
    title
    author
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    addBook(variables: AddBookMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddBookMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddBookMutation>(AddBookDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addBook', 'mutation', variables);
    },
    books(variables?: BooksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<BooksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BooksQuery>(BooksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'books', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;