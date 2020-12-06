import gql from 'graphql-tag';

const GET_BUNDLES = () => gql`
query{
  bundles {
   id,
   name,
   image {
     url
   },
    tools {
       id,
       name,
     },
  }
 }`;

export default GET_BUNDLES;
