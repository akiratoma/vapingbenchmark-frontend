import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_DEVICES } from './queries';
import { DevicesResponse, DevicesArgs } from './types';

export const useSearchDevices = () => {
  const [ref, setRef] = useState('');
  const [refParams, setRefParams] = useState('');
  const { loading, data, fetchMore } = useQuery<DevicesResponse, DevicesArgs>(SEARCH_DEVICES, { variables: { ref: refParams, limit: 5 }, notifyOnNetworkStatusChange: true });

  useEffect(() => {
    const timer = setTimeout(() => {
      setRefParams(ref);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [ref]);

  return {
    setRef,
    loading,
    data,
    fetchMore
  };
};
