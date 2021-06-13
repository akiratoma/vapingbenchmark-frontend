import React from 'react';
import { GetServerSideProps } from 'next';
import DefaultErrorPage from 'next/error';
import { GET_DEVICES } from '../lib/queries';
import client from '../lib/apollo';
import { DevicesResponse, DevicesArgs, DevicesProps } from '../lib/types';
import Metatags from '../components/Metatags';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import DeviceTable from '../components/Table';

const Devices = ({ devices }: DevicesProps) => {
  const title = devices.map(dev => dev.deviceName).join(' vs ');
  const description = `Compare device specifications for ${devices.map(dev => dev.deviceName).join(', ')} devices`;
  const image = '/favicon.ico';

  return (
    <>
      {devices.length !== 0
        ? <main>
            <Metatags {...{ title, description, image }} />
            <Header />
            <Search initialDevices={devices} />
            <DeviceTable devices={devices} />
            <Footer />
          </main>
        : <DefaultErrorPage statusCode={404} />
      }
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const ids = params?.devices as string;

  const { data: { devices: { data: devices } } } = await client.query<DevicesResponse, DevicesArgs>({
    query: GET_DEVICES,
    variables: { ids: ids.split(',') }
  });

  return {
    props: { devices }
  };
};

export default Devices;
