import React from 'react';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import {getHoursPerMonthAndCar} from './services/hours_per_month_and_car';
import {getUpdatedMonthArrayNumber} from '../src/services/current_month_array';

function App() {
  //  const arr = await getHoursPerMonthAndCar();
  // console.log("arr", arr)

  // getUpdatedMonthArrayNumber();
 
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}


export default App;
