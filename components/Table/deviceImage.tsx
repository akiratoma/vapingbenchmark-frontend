import React, { useEffect, useState } from 'react';
import { ImagesProps } from '../../lib/types';
import styles from '../../styles/components/Table.module.scss';

const DeviceImage = ({ urls }: ImagesProps) => {
  const initialValues = urls.map((_url, idx) => <img style={{ height: '25px', width: '25px' }} key={idx} src='/loading.gif' />);
  const [images, setImages] = useState<JSX.Element[]>(initialValues);
  const [current, setCurrent] = useState(0);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const imagesCopy = Array.from(images);
    imagesCopy.fill(<img className={styles.image} src={process.env.BACKEND_URI + urls[current]} />, current, current + 1);
    setImages(imagesCopy);
  }, [current]);

  const handleLeft = () => {
    if (current !== 0) {
      setCurrent(current - 1);
      setTransform(transform + 100);
    } else {
      setCurrent(urls.length - 1);
      setTransform(-100 * (urls.length - 1));
    };
  };

  const handleRight = () => {
    if (current !== urls.length - 1) {
      setCurrent(current + 1);
      setTransform(transform - 100);
    } else {
      setCurrent(0);
      setTransform(0);
    };
  };

  return (
    <div className={styles.deviceImage}>
      {urls.length > 1 ? <input className={styles.inputLeft} type="image" src='/left-arrow.svg' onClick={handleLeft} /> : null}
      <div className={styles.imageBox} style={{ transform: `translate(${transform}%)` }}>
        {images.map((img, idx) =>
          <div className={styles.image} key={idx}>{img}</div>
        )}
      </div>
      {urls.length > 1 ? <input className={styles.inputRight} type="image" src='/right-arrow.svg' onClick={handleRight} /> : null}
    </div>
  );
};

export default DeviceImage;
