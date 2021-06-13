import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import '../styles/globals.scss';
import client from '../lib/apollo';

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
