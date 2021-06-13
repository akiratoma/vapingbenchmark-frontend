import React from 'react';
import Compare from './compare';
import { Devices, DevicesResponse } from '../../lib/types';
import styles from '../../styles/components/Search.module.scss';

interface Props {
  loading: boolean
  data: DevicesResponse | undefined
  inputFocus: boolean
  setInputFocus: React.Dispatch<React.SetStateAction<boolean>>
  fetchMore: Function
  selected: Devices
  setSelected: React.Dispatch<React.SetStateAction<Devices>>
  setError: React.Dispatch<React.SetStateAction<string>>
  errorTimeout: NodeJS.Timeout | undefined
  setErrorTimeout: React.Dispatch<React.SetStateAction<NodeJS.Timeout | undefined>>
  error: string
}

const Recommendation = ({ loading, data, inputFocus, setInputFocus, fetchMore, selected, setSelected, setError, errorTimeout, setErrorTimeout, error }: Props) => {
  const handleItemClick = (id: string) => {
    if (selected.length === 4 && !selected.map(dev => dev.deviceID).includes(id)) {
      setError('Maximum number of devices to compare reached. Please remove some before adding');
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
      setErrorTimeout(setTimeout(() => setError(''), 3000));
    } else if (selected.map(dev => dev.deviceID).includes(id)) {
      setError('Device already added');
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
      setErrorTimeout(setTimeout(() => setError(''), 3000));
    } else {
      const selectedDevices = data!.devices.data.filter(dev => dev.deviceID === id);
      setSelected(selected.concat(selectedDevices));
    }
  };

  return (
    <>
      {inputFocus
        ? <div className={styles.searchRecommendation}>
            {loading && !data
              ? <ul><li className={styles.searchLoading}><img src='/loading.gif' /></li></ul>
              : data
                ? <>
                    {data.devices.data.length > 0
                      ? <ul>
                          {data.devices.data.map(device =>
                            <li key={device.deviceID} onClick={() => handleItemClick(device.deviceID)}>
                              <img src={process.env.BACKEND_URI + device.previewUrl} />
                              <div>{device.deviceName}</div>
                            </li>
                          )}
                          {loading
                            ? <img src='/loading.gif' />
                            : data.devices.nextID
                              ? <div><button onClick={() => { fetchMore({ variables: { nextID: data.devices.nextID, limit: 5 } }); }}>More</button></div>
                              : null
                          }
                        </ul>
                      : null
                    }
                  </>
                : null
            }
            {selected.length > 0
              ? <Compare {...{ selected, setSelected, setInputFocus, error }} />
              : null
            }
          </div>
        : null
      }
    </>
  );
};

export default Recommendation;
