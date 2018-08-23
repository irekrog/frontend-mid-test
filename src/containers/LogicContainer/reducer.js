import ActionTypes from './actionTypes';

export default (state = [], action) => {
    switch(action.type) {
        case ActionTypes.GET_HOUSES:
            return [...action.houses];
        default:
            return state;
    }
}
