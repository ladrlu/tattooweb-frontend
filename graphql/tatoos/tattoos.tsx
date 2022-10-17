import { gql } from "@apollo/client";

export const TattoosQuery = gql`
  query Tattoos {
    tattoos {
      data {
        id
        attributes {
          title
          description
          previewImage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const TattoosListQuery = gql`
  query Tattoos {
    tattoos {
      data {
        id
      }
    }
  }
`;

export const SingleTattooQuery = gql`
  query Tattoos($id: ID!) {
    tattoo(id: $id) {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;
