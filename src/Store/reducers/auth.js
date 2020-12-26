import * as actionTypes from '../action-types/auth'
import {updateObject} from '../utility'

const initialState = {
    token: null
    ,userType: null
    ,loading: false
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return updateObject(state, {loading: true});
        case actionTypes.AUTH_SUCCESS: return updateObject(state, {loading: false});
        default: return state;
    }
};

export default reducer;