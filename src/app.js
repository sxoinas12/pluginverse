import React from 'react';
import AppRouter from './router'
import './styles/app.less';
import { setConfiguration } from 'react-grid-system';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

setConfiguration({ containerWidths: [560, 740, 960, 1140, 1440], maxScreenClass: 'xxl' });

const client = new ApolloClient({
  uri: `${global.API_URL}/graphql`
});
function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
