import ActionTypes from './actionTypes';

export const getHouses = (houses) => ({
    type: ActionTypes.GET_HOUSES,
    houses
})

export const addHouse = (data) => ({
    type: ActionTypes.ADD_HOUSE
})