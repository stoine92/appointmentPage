import React from "react";
 
export const Tile = ({data}) => {
  return (
    <div className="tile-container">
     { Object.values(data).map((element, index) =>{
      <p className={index === 0 ? 'tile-title' : 'tile'} key={element}>
      {element}
    </p>
     })}
    </div>
  );
};
