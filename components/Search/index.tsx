import React, { useState, useEffect, useRef } from 'react';
import { Devices } from '../../lib/types';
import { useSearchDevices } from '../../lib/hooks';
import Bar from './bar';
import Recommendation from './recommendation';
import styles from '../../styles/components/Search.module.scss';

const Search = ({ initialDevices }: { initialDevices: Devices }) => {
  const { setRef, loading, data, fetchMore } = useSearchDevices();
  const [inputFocus, setInputFocus] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Devices>(initialDevices);
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout>();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (wrapperRef.current && wrapperRef.current.contains(event.target as Node)) {
        setInputFocus(true);
      } else {
        const tag = (event.target as HTMLElement).tagName;
        if (tag !== 'BUTTON' && tag !== 'A') {
          setInputFocus(false);
        }
      };
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [wrapperRef]);

  return (
    <div className={styles.search}>
      <div className={styles.searchContent} ref={wrapperRef}>
        <Bar {...{ setRef }} />
        <Recommendation {...{ loading, data, inputFocus, setInputFocus, fetchMore, selected, setSelected, setError, errorTimeout, setErrorTimeout, error }} />
      </div>
    </div>
  );
};

export default Search;
