import gql from 'graphql-tag';

export default (query, limit = 10) => gql`
query{
    categories(limit: ${limit},  where: { name_contains: "${query}"}){
        id,
        name,
        parent{
            id,
            name
          }
        }
    }`;
