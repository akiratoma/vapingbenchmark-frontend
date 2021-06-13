import React from 'react';
import Head from 'next/head';
import { MetatagsProps } from '../lib/types';

const Metatags = ({ title, description, image }: MetatagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Barrio" rel="stylesheet"></link>
    </Head>
  );
};

export default Metatags;
