import React, {useState} from 'react';
import './App.css'
import Dashboard from './components/dashboard/Dashboard';
import { MDBContainer} from "mdbreact";
import SpinnerPage from '../src/components/spinner/Spinner';

let loaded = true;

function App() {

  if (loaded)
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  return (
    <MDBContainer>
        <div className="mx-auto">
          <SpinnerPage></SpinnerPage>
        </div>
    </MDBContainer>
  )
}
 

export default App;
