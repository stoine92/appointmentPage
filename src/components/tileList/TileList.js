import React from "react";
import {Tile}  from '../tile/Tile';


export const TileList = ({data}) => {
  return (
    <div>
      {data?.map((tile) => (
        <Tile data={tile} />
      ))}
    </div>
  );
};
