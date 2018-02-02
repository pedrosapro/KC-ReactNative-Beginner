import * as types from '../types/heroes'

const initialState = {
    list: [],
    item: null,
}

export default function reducer(state = initialState, action = {}) {   
    switch (action.type) {

        case 'Define a TYPE': 
            return {
                ...state,
                list: action.value,
            };

        default:
            return state;

    }
}