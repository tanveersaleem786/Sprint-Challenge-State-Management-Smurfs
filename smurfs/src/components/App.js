import React, { Component, useEffect } from "react";
import {connect} from "react-redux";
import "./App.css";
import {AddSmurf} from './smurfs/AddSmurf';
import {ListSmurfs} from './smurfs/ListSmurfs';
import {getSmurfs, addSmurf, deleteSmurf} from "../store/actions";

function  App(props) {
  
  useEffect(() => {
   props.getSmurfs();
  },[props.apiData]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <AddSmurf addSmurf={props.addSmurf}/>
      <div>
      {props.apiData.map((smurf, index) => (
        <ListSmurfs key={index} smurf={smurf} deleteSmurf={props.deleteSmurf} />
      ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
   apiData : state.apiData,
   isFetching: state.isFetching,
   error: state.error
  };

};

export default connect(mapStateToProps,{getSmurfs, addSmurf, deleteSmurf})(App);