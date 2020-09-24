import gql from 'graphql-tag';

export default gql`
query{
  categories(where:{parent_null:0}){
    id,
    name,
    parent{
      id,
      name
    }
  }
}`;
