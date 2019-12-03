import React, {useState, memo, useEffect} from 'react';
import {useSelector} from 'react-redux';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import './listOfCities.css';

const ListOfCities = () => {
    const cities = useSelector((state) => state.cities.listOfCities);
    const [sortDirection, setSortDirection] = useState('none');
    const [orderedCities, setOrderedCities] = useState([...cities]);

    useEffect(() => {
        if (sortDirection === 'asc') setOrderedCities([...Array.from(cities).sort()]);
        if (sortDirection === 'desc') setOrderedCities([...Array.from(cities).reverse()]);
        if (sortDirection === 'none') setOrderedCities([...cities]);
    }, [cities, sortDirection]);
    
    const handleOnSort = () => {
        let newSortDirection;
        if (sortDirection === 'none') newSortDirection = 'asc';
        if (sortDirection === 'asc') newSortDirection = 'desc';
        if (sortDirection === 'desc') newSortDirection = 'none';
        setSortDirection(newSortDirection);
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={handleOnSort}>
                        <span>City </span>
                        {(sortDirection === 'desc') && <span>▼</span>}
                        {(sortDirection === 'asc') && <span>▲</span>}
                    </th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {orderedCities.map((city) => <WeatherInfo city={city} key={city}/>)}
            </tbody>
        </table>
    )
}

export default memo(ListOfCities);