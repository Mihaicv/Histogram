
import { gql } from '@apollo/client';

export const GET_POSTS_CREATED = gql`
  query {
    allPosts(count: 300) {
      createdAt
    }
  }
`;
