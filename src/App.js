import './App.css';
import '../src/component/histogram/Histogram.css'
import GetDataFromGraphQl from './component/GetDataFromGraphQl'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

const link = from([
  new HttpLink({ uri: 'https://fakerql.goosfraba.ro/graphql' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
       <h1> Number of posts created in each month</h1>
       <GetDataFromGraphQl/>
    </ApolloProvider>
  );
}

export default App;
