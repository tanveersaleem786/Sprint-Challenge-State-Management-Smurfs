
import React from 'react';

import {ShowSmurf} from './ShowSmurf';



export const ListSmurfs = (props) => {

 //console.log(props);
  return (

    <div className="w3-container">
    <h2>Smurf List</h2>    

      <table className="w3-table w3-bordered">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Height</th>
          <th>Actions</th>
        </tr>      
      
         {props.smurfs.map((smurf, index) => (
        <ShowSmurf key={index} smurf={smurf} deleteSmurf={props.deleteSmurf} />
         ))}

      </table>
    
    </div>
  );
}