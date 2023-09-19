/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        blogPostsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      mail
      pass
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mail
        pass
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIntegrante = /* GraphQL */ `
  query GetIntegrante($id: ID!) {
    getIntegrante(id: $id) {
      id
      id_perfil
      id_banda
      createdAt
      updatedAt
      bandaIntegrantesId
      __typename
    }
  }
`;
export const listIntegrantes = /* GraphQL */ `
  query ListIntegrantes(
    $filter: ModelIntegranteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntegrantes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        id_perfil
        id_banda
        createdAt
        updatedAt
        bandaIntegrantesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBanda = /* GraphQL */ `
  query GetBanda($id: ID!) {
    getBanda(id: $id) {
      id
      name
      integrantes {
        items {
          id
          id_perfil
          id_banda
          createdAt
          updatedAt
          bandaIntegrantesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBandas = /* GraphQL */ `
  query ListBandas(
    $filter: ModelBandaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBandas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        integrantes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
