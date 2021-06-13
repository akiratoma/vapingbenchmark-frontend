import React from 'react';
import Metatags from '../components/Metatags';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';

const Home = () => {
  const title = 'Vaping Benchmark - Home Page';
  const description = 'Compare device specifications for hundreads of vaping devices!';
  const image = '/favicon.ico';

  return (
    <main style={{ height: '100%', display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}>
      <Metatags {...{ title, description, image }} />
      <Header />
      <Search initialDevices={[]} />
      <Footer />
    </main>
  );
};

export default Home;
