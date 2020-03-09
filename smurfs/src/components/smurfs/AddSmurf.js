import React, {useState} from "react";
import "./smurfs.css";

export const AddSmurf = (props) => {

    const[newSmurf, setNewSmurf] = useState({name:'', age:'', height:''});

    const handleChange = (e) =>  {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addSmurf(newSmurf);
    }

    return (
     <div className="container"> 
      
       <div className="w3-container w3-orange">
        <h2>Add Smurfs</h2>
       </div>
    
        <form className="w3-container" onSubmit={handleSubmit}>
    
          <p>
            <input
              className="w3-input"
              name="name"
              type="text"
              value={newSmurf.name}
              onChange={handleChange} />
            <label>Name:</label>
         </p> 
         <p>         
            <input
              className="w3-input"
              name="age"
              type="number"
              value={newSmurf.age}
              onChange={handleChange} />
           <label>Age:</label>
          </p>
          <p>          
            <input
              className="w3-input"
              name="height"
              type="text"
              value={newSmurf.height}
              onChange={handleChange} />
          <label>Height:</label>
          </p>
          <input type="submit" value="Submit" class="w3-btn w3-orange" />
          
        </form>
        </div>
      );

}

