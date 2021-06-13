import React from 'react';
import Link from 'next/link';
import { Devices } from '../../lib/types';
import styles from '../../styles/components/Search.module.scss';

interface Props {
  selected: Devices,
  setSelected: React.Dispatch<React.SetStateAction<Devices>>,
  setInputFocus: React.Dispatch<React.SetStateAction<boolean>>
  error: string
}

const Compare = ({ selected, setSelected, setInputFocus, error }: Props) => {
  const handleRemove = (id: string) => {
    setSelected(selected.filter(dev => dev.deviceID !== id));
  };

  return (
    <>
      {selected.length !== 0
        ? <div className={styles.searchCompare}>
            <div className={styles.searchCompareContent}>
              <ul>
                {selected.map(device =>
                  <li key={device.deviceID}>
                    <img src={process.env.BACKEND_URI + device.previewUrl} />
                    <div>{device.deviceName}</div>
                    <input type="image" src='/trash-can.svg' onClick={() => handleRemove(device.deviceID)} />
                  </li>
                )}
              </ul>
              <Link href={`/${selected.map(dev => dev.deviceID).join(',')}`}>
                <div className={styles.searchCompareButton} onClick={() => setInputFocus(false)} >Compare</div>
              </Link>
              {error !== ''
                ? <div className={styles.error}>{error}</div>
                : null
              }
            </div >
          </div>
        : null
      }
    </>
  );
};

export default Compare;
