/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvento = /* GraphQL */ `
  mutation CreateEvento(
    $input: CreateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    createEvento(input: $input, condition: $condition) {
      id
      name
      date
      location
      description
      bandaID
      Banda {
        id
        name
        integrantes {
          nextToken
          __typename
        }
        Eventos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEvento = /* GraphQL */ `
  mutation UpdateEvento(
    $input: UpdateEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    updateEvento(input: $input, condition: $condition) {
      id
      name
      date
      location
      description
      bandaID
      Banda {
        id
        name
        integrantes {
          nextToken
          __typename
        }
        Eventos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEvento = /* GraphQL */ `
  mutation DeleteEvento(
    $input: DeleteEventoInput!
    $condition: ModelEventoConditionInput
  ) {
    deleteEvento(input: $input, condition: $condition) {
      id
      name
      date
      location
      description
      bandaID
      Banda {
        id
        name
        integrantes {
          nextToken
          __typename
        }
        Eventos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createIntegrante = /* GraphQL */ `
  mutation CreateIntegrante(
    $input: CreateIntegranteInput!
    $condition: ModelIntegranteConditionInput
  ) {
    createIntegrante(input: $input, condition: $condition) {
      id
      id_perfil
      id_banda
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateIntegrante = /* GraphQL */ `
  mutation UpdateIntegrante(
    $input: UpdateIntegranteInput!
    $condition: ModelIntegranteConditionInput
  ) {
    updateIntegrante(input: $input, condition: $condition) {
      id
      id_perfil
      id_banda
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteIntegrante = /* GraphQL */ `
  mutation DeleteIntegrante(
    $input: DeleteIntegranteInput!
    $condition: ModelIntegranteConditionInput
  ) {
    deleteIntegrante(input: $input, condition: $condition) {
      id
      id_perfil
      id_banda
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBanda = /* GraphQL */ `
  mutation CreateBanda(
    $input: CreateBandaInput!
    $condition: ModelBandaConditionInput
  ) {
    createBanda(input: $input, condition: $condition) {
      id
      name
      integrantes {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Eventos {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
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
export const updateBanda = /* GraphQL */ `
  mutation UpdateBanda(
    $input: UpdateBandaInput!
    $condition: ModelBandaConditionInput
  ) {
    updateBanda(input: $input, condition: $condition) {
      id
      name
      integrantes {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Eventos {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
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
export const deleteBanda = /* GraphQL */ `
  mutation DeleteBanda(
    $input: DeleteBandaInput!
    $condition: ModelBandaConditionInput
  ) {
    deleteBanda(input: $input, condition: $condition) {
      id
      name
      integrantes {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Eventos {
        items {
          id
          name
          date
          location
          description
          bandaID
          createdAt
          updatedAt
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
