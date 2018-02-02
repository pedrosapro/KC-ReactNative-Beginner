import * as types from '../types/heroes'
import * as webservices from '../../webservices/webservices'

// >>>>>>> REDUCER 
function updateHeroesList(value) { 
    return {
        type: types.HEROES_UPDATE_LIST,
        value: value
    }
}

function updateHeroe(value) {
    return {
        type: types.HEROE_UPDATE,
        value: value
    }
}

function setHousesFetching(value) {
    return {
        type: types.HOUSES_SET_FETCHING,
        value: value
    }
}


// >>>>>>>>>>>

export function fetchHeroesList() {

    return (dispatch, getState) => {

        dispatch(setHousesFetching(true))

        webservices.fetchCharacters(webservices.constants.FETCH_CHARACTERS_URL)
        .then(response => {
            if (response.data) {
                heroes = response.data.results
                dispatch(updateHeroesList(heroes))
                dispatch(setHousesFetching(false))

            }
            else {

            }
        }).catch(error => {
            dispatch(setHousesFetching(false))
        });

    }

}

export function updateHeroeOnSelect (heroe) {

    return (dispatch, getState) => {
        dispatch(updateHeroe(heroe))
    }

}
