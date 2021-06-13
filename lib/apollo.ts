import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SEARCH_DEVICES } from './queries';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        devices: {
          keyArgs: ['ref', 'ids'],
          merge (existing = { nextID: null, data: [] }, incoming) {
            return {
              nextID: incoming.nextID,
              data: [...existing.data, ...incoming.data]
            };
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: process.env.APOLLO_URI,
  cache: cache
});

client.writeQuery({
  query: SEARCH_DEVICES,
  data: {
    devices: {
      nextID: null,
      data: []
    }
  },
  variables: { ref: '' }
});

export default client;
