import gql from 'graphql-tag';

export default (page = 0, perPage = 20) => gql`
query{
  categories(where:{parent_null:0}, limit:${perPage}, start:${page * perPage}){
    id,
    name,
    parent{
      id,
      name
    }
  }
}`;
