import gql from 'graphql-tag';

export default (query, limit = 10) => gql`
query{
    plugins(limit: ${limit},  where: { name_contains: "${query}"}){
        id,
        name,
        description,
        author {
            name,
        },
        stars
        },
    }`;
