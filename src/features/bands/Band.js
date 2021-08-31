import React from 'react';
import { bandRemoved } from './bandsSlice';
import { useDispatch } from 'react-redux';

function Band({ band }) {
  console.log(band);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(bandRemoved(band.id));
  };
  return (
    <div>
      <span>
        <p>{band.name}</p>
      </span>
      <button onClick={handleClick}>Delete Band</button>
    </div>
  );
}

export default Band;
