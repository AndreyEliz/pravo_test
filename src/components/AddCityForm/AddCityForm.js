import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewCity} from '../../actions/cities.actions';
import './addCityForm.css';

const AddCityForm = () => {
    const dispatch = useDispatch();
    const [cityName, setCityName] = useState('');

    const handleCityNameChange = (e) => setCityName(e.target.value);
    const onAddBtnClick = () => {
        dispatch(addNewCity(cityName));
        setCityName('');
    }

    return (
    <div className='form'>
        <label>
            <span>Enter City:</span>
            <input value={cityName} onChange={handleCityNameChange} />
        </label>
        <button onClick={onAddBtnClick}>Add</button>
    </div>);
}

export default AddCityForm;