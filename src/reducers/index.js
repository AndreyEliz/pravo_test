import {combineReducers} from 'redux';
import cities from './cities.reducer';
import weatherInfo from './weatherInfo.reducer';

const rootReducer = combineReducers({
    cities,
    weatherInfo
});

export default rootReducer;