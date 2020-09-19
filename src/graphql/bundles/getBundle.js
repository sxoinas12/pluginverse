import gql from 'graphql-tag';

const GET_BUNDLE = id => gql`
query{
    bundles(where: {id: ${id}}) {
      id,
      description,
      name,
      plugins{
       id,
       name,
       description,
       author {
        name,
       },
       tools {
        name,
        id,
      }
      },
      tools {
        id,
        name,
       
      },
        }
  }`;

export default GET_BUNDLE;
