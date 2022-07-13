import React from 'react';


export const Tile = ({ tiles }) => {
  const values = Object.values(tiles);
  return (
    <div className='tile-container'>
      {values.map((tile, index) => (
        <p className={index === 0 ? 'tile-title' : 'tile'} key={tile}>
          {tile}
        </p>
      ))}
    </div>
  );
};

