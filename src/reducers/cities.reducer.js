import {
    ADD_NEW_CITY,
    REMOVE_CITY,
    WEATHER_REQUEST_FAILED
} from '../actions/action.types';

const initialState = {
    listOfCities: new Set(['London', 'Paris', 'Amsterdam'])
};

const cities = (state=initialState, action) => {
    const reducers = {
        [ADD_NEW_CITY]: () => ({
            ...state,
            listOfCities: new Set(state.listOfCities.add(action.data))
        }),
        [REMOVE_CITY]: () => {
            state.listOfCities.delete(action.data);
            return ({
                ...state,
                listOfCities: new Set(state.listOfCities)
            })
        },
        [WEATHER_REQUEST_FAILED]: () => {
            state.listOfCities.delete(action.data);
            return ({
                ...state,
                listOfCities: new Set(state.listOfCities)
            })
        }
    }

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export default cities;
