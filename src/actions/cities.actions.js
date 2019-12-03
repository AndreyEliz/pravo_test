import { ADD_NEW_CITY, REMOVE_CITY } from "./action.types";

export const addNewCity = (cityName) => ({
    type: ADD_NEW_CITY,
    data: cityName
})

export const removeCity = (cityName) => ({
    type: REMOVE_CITY,
    data: cityName
})