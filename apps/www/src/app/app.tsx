// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckm3xym1jy0fn01z55lbqhucc/master',
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NxWelcome title="www" />
      </ApolloProvider>
    </>
  );
}

export default App;
