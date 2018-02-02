import * as types from '../types/heroes'

const initialState = {
    list: [],
    item: null,
    selected: null,
}

export default function reducer(state = initialState, action = {}) {   
    switch (action.type) {

        case types.HEROES_UPDATE_LIST: 
            return {
                ...state,
                list: action.value,
            };
        case types.HEROE_UPDATE:
            return  {
                ...state,
                selected: action.value
            }

        default:
            return state;

    }
}