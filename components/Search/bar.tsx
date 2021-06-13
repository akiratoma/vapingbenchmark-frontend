import React from 'react';
import styles from '../../styles/components/Search.module.scss';

const Bar = ({ setRef }: { setRef: React.Dispatch<React.SetStateAction<string>> }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRef(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input onChange={handleChange} placeholder='Search your device' />
    </div>
  );
};

export default Bar;
