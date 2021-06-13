import React from 'react';

const Rating = ({ rating, reviews }: { rating: string, reviews: string }) => {
  const rate = Math.floor(parseFloat(rating) * 2);
  const [full, half, empty] = [Math.floor(rate / 2), rate % 2 === 1, Math.floor((10 - rate) / 2)];

  return (
    <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center', justifyContent: 'center' }}>
        {[...Array(full)].map((_e, idx) => <img key={idx} src='/star_full.svg' />)}
        {half ? <img src='/star_half_full.svg' /> : null}
        {[...Array(empty)].map((_e, idx) => <img key={idx} src='/star_empty.svg' />)}
      </div>
      <div>({reviews} reviews)</div>
    </div>
  );
};

export default Rating;
