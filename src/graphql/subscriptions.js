/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateIntegrante = /* GraphQL */ `
  subscription OnCreateIntegrante(
    $filter: ModelSubscriptionIntegranteFilterInput
  ) {
    onCreateIntegrante(filter: $filter) {
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
export const onUpdateIntegrante = /* GraphQL */ `
  subscription OnUpdateIntegrante(
    $filter: ModelSubscriptionIntegranteFilterInput
  ) {
    onUpdateIntegrante(filter: $filter) {
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
export const onDeleteIntegrante = /* GraphQL */ `
  subscription OnDeleteIntegrante(
    $filter: ModelSubscriptionIntegranteFilterInput
  ) {
    onDeleteIntegrante(filter: $filter) {
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
export const onCreateBanda = /* GraphQL */ `
  subscription OnCreateBanda($filter: ModelSubscriptionBandaFilterInput) {
    onCreateBanda(filter: $filter) {
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
export const onUpdateBanda = /* GraphQL */ `
  subscription OnUpdateBanda($filter: ModelSubscriptionBandaFilterInput) {
    onUpdateBanda(filter: $filter) {
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
export const onDeleteBanda = /* GraphQL */ `
  subscription OnDeleteBanda($filter: ModelSubscriptionBandaFilterInput) {
    onDeleteBanda(filter: $filter) {
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
