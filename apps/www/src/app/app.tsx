// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { WwwFeatureResourceDetail } from '@arjuna/www/feature-resource-detail';
import { Header } from '@arjuna/www/ui-shared';
import { Link, Route, Routes } from 'react-router-dom';
import Resources from './resources';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/ckm3xym1jy0fn01z55lbqhucc/master',
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Resources title="www" />
      </ApolloProvider>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature-resource-detail">WwwFeatureResourceDetail</Link>
          </li>
          <li>
            <Link to="/feature-resource-detail">WwwFeatureResourceDetail</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/feature-resource-detail"
          element={<WwwFeatureResourceDetail />}
        />
        <Route
          path="/feature-resource-detail"
          element={<WwwFeatureResourceDetail />}
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
