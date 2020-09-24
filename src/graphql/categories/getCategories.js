import gql from 'graphql-tag';

export default gql`
query{
  categories(where:{parent_null:1}){
    id,
    name
  }
}`;
