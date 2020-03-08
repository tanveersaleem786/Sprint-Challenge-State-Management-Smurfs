import React, {useState} from "react";

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
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={newSmurf.name}
              onChange={handleChange} />
          </label>
          <br />
          <label>
            Age:
            <input
              name="age"
              type="number"
              value={newSmurf.age}
              onChange={handleChange} />
          </label>
          <br />
          <label>
            Height:
            <input
              name="height"
              type="text"
              value={newSmurf.height}
              onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );

}