import { gql } from '@apollo/client';

export const GET_FAVORITES = gql`
  query {
    favorites {
      id
      type
      value
      userId
    }
  }
`;

export const ADD_FAVORITE = gql`
  mutation ($type: String!, $value: String!, $userId: uuid!) {
    insert_favorites(
      objects: [{ type: $type, value: $value, userId: $userId }]
    ) {
      returning {
        id
        type
        value
        userId
      }
    }
  }
`;

export const DELETE_FAVORITE = gql`
  mutation ($id: uuid!) {
    delete_favorites(where: { id: { _eq: $id } }) {
      returning {
        id
        value
        type
      }
    }
  }
`;
