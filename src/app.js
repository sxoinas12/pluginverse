import React from 'react';
import AppRouter from './router';

import './styles/app.less';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: global.API_URL+'/graphql'
});
function App() {
  return (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
  );
}

export default App;
