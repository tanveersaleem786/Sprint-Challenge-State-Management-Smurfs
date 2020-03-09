
import React from 'react';

export const ListSmurfs = (props) => {
  return (
    <div>
      <p>Name: {props.smurf.name} Age: {props.smurf.age} Height: {props.smurf.height} <input type="button" value="Delete" onClick={()=>props.deleteSmurf(props.smurf)} /></p> 
    </div>
  );
}