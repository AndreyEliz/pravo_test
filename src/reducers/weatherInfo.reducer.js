import {
    GET_WEATHER_INFO
} from '../actions/action.types';

const initialState = {
};

const weatherInfo = (state=initialState, action) => {
    const reducers = {
        [GET_WEATHER_INFO]: () => ({
            ...state,
            [action.data.name.toLowerCase()]: {...action.data.main}
        })
    }

    return (reducers[action.type]  && reducers[action.type]()) || state
};

export default weatherInfo;
