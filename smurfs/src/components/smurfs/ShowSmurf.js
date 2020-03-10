
import React from 'react';



export const ShowSmurf = (props) => {
   // console.log(props);
    return (            
            <tr key={props.key}>
              <td>{props.smurf.name}</td>
              <td>{props.smurf.age}</td>
              <td>{props.smurf.height} </td>
              <td><input type="button" value="Delete" onClick={()=>props.deleteSmurf(props.smurf)} /></td>
            </tr>    
          
      );
    }