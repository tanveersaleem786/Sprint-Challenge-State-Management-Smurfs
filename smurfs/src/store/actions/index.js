import axios from "axios";

export const START_API_CALL = "START_API_CALL";
export const LIST_SMURF_SUCCESS = "LIST_SMURF_SUCCESS";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";


export const getSmurfs = () => dispatch => {

    dispatch({type: START_API_CALL});

    axios
    .get("http://localhost:3334/smurfs")
    .then(res => {
        //console.log(res);
        dispatch({type: LIST_SMURF_SUCCESS, payload: res.data});
    }) 
    .catch(err => {
        dispatch({
            type: API_CALL_FAILURE,
            payload: `${err.response.message} with response code ${
            err.response.code
            }`
        });
    })
}

export const addSmurf = (smurf) => dispatch => {

    dispatch({type: START_API_CALL});
    console.log(smurf);
    axios
    .post("http://localhost:3334/smurfs", smurf)
    .then(res => {
        //console.log(res);
        dispatch({type: ADD_SMURF_SUCCESS, payload: smurf});
    }) 
    .catch(err => {
        dispatch({
            type: API_CALL_FAILURE,
            payload: `${err.response.message} with response code ${
            err.response.code
            }`
        });
    }) 
}

export const deleteSmurf = (smurf) => dispatch => {

    dispatch({type: START_API_CALL});
    console.log(smurf);
    axios
    .delete(`http://localhost:3334/smurfs/${smurf.id}`)
    .then(res => {
        //console.log(res);
        dispatch({type: DELETE_SMURF_SUCCESS, payload: smurf});
    }) 
    .catch(err => {
        dispatch({
            type: API_CALL_FAILURE,
            payload: `${err.response.message} with response code ${
            err.response.code
            }`
        });
    }) 
}