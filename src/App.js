import React from 'react';
import {ToastContainer} from 'react-toastify';
import AddCityForm from './components/AddCityForm/AddCityForm'
import ListOfCities from './components/ListOfCities/ListOfCities';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <div className='content'>
            <AddCityForm/>
            <ListOfCities/>
            <ToastContainer autoClose={3000}
                            hideProgressBar />
        </div>
    </div>
  );
}

export default App;
