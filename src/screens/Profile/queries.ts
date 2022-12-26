import { gql } from '@apollo/client';

export const DELETE_USER = gql`
  mutation DeleteUser($id: uuid!) {
    deleteUser(id: $id) {
      id
      displayName
      email
    }
  }
`;
