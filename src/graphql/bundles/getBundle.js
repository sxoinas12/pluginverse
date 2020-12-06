import gql from 'graphql-tag';

const GET_BUNDLE = id => gql`
query{
  bundle(id: ${id}) {
    id,
    description,
    name,
    image {
      url
    },
    plugins{
      id,
      name,
      description,
      author {
        name,
      },
      stars
    },
    tools {
      id,
      name,
    },
  }
}`;

export default GET_BUNDLE;
