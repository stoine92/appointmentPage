import React from "react";
 
export const Tile = ({data}) => {
  return (
    <div className="tile-container">
     { Object.values(data).forEach((element, i) =>{
      if(i === 0){
        <p className='tile-title'>{element}</p>
      }else{
        <p className='tile'>{element}</p>
      }
        
     })}
    </div>
  );
};
