import React from 'react';
import './App.css';
import {getFetchData} from './services/fetch_data_client';
import  AllVehiclesDistanceOverview  from './components/allVehiclesDistanceOverview';


function App() {
  const carReservationsArray = getFetchData("https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=2019-01-01T00:00&reservation_end__lte=2019-01-31T00:00");
  const carPoolArray = getFetchData("https://devteilautos.zemtu.com/marketplace/api/v2/vehicle")
  
   console.log("carReservationsArray", carReservationsArray)
   console.log("carPoolArray", carPoolArray)
  
  return (
    <div className="App">
      <AllVehiclesDistanceOverview/>
    </div>
  );
}


export default App;
