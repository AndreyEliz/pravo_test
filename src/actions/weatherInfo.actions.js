import {get, API_URL, APPID} from "../api/api";
import {GET_WEATHER_INFO, WEATHER_REQUEST_FAILED} from '../actions/action.types';
import {toast} from "react-toastify";

export const getWeatherInfo = (city) => (dispatch) => 
    get(API_URL, {
        q: city,
        appid: APPID
    })
    .then((response) => dispatch({
        type: GET_WEATHER_INFO,
        data: response
    }))
    .catch((error) => {
        dispatch({
            type: WEATHER_REQUEST_FAILED,
            data: city
        })
        toast(`No data for ${city}`, {type: 'error'})
    })