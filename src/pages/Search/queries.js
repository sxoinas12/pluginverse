
import gql from 'graphql-tag';

const limit = 10;

const SEARCH_PLUGIN = (name, page = 1) => gql`
query{
    plugins ( limit: 12, start: ${page * limit}, where: {  name_contains:${name} }){
      id,
      name,
      description,
      icon {
        url
      }
    }
}`;

export default SEARCH_PLUGIN;
