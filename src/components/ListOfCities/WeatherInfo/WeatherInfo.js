import React, {memo, useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getWeatherInfo} from '../../../actions/weatherInfo.actions';
import {removeCity} from '../../../actions/cities.actions';

const WeatherInfo = ({city}) => {
    const dispatch = useDispatch();
    const weather = useSelector((state) => state.weatherInfo[city.toLowerCase()] || {});

    useEffect(() => {
        dispatch(getWeatherInfo(city))
    }, [city, dispatch]);

    const onRemoveClick = () => dispatch(removeCity(city));

    return (
        <tr>
            <td>{city}</td>
            <td>{weather.temp}</td>
            <td>{weather.pressure}</td>
            <td>
                <button onClick={onRemoveClick}>Remove</button>
            </td>
        </tr>
    );
};

WeatherInfo.propTypes = {
    city: PropTypes.string
}

export default memo(WeatherInfo);