/**
 * Created by gitsad on 05.01.17.
 */
import { combineReducers } from 'redux';
import houseReducer from './containers/LogicContainer/reducer';

const reducerToDelete = (state = {}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    reducerToDelete,
    houseReducer
});