import {START_API_CALL, LIST_SMURF_SUCCESS, ADD_SMURF_SUCCESS, DELETE_SMURF_SUCCESS} from "../actions"

const initialState = {
    apiData: [],
    isFetching: false,
    error: ""
}

export const reducer = (state=initialState, action) => {

    switch (action.type) {
        case START_API_CALL:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
        case LIST_SMURF_SUCCESS:
            return {
                ...state,
                apiData: action.payload,
                isFetching: false,
                error: ""
            };  
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                apiData: [...state.apiData, action.payload],
                isFetching: false,
                error: ""
            };      
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                apiData: state.apiData.filter(smurf => smurf.id !== action.payload.id),
                isFetching: false,
                error: ""
            };          
        default:
            return state;
    }
}