import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import SpinnerPage from '../spinner/Spinner';


const AllVehiclesDistanceOverview  = (props: any) => {  
  
  if(props.carDistanceDataline.datasets !== undefined)
  
  return (
    <MDBContainer size="sm">
      <h3 className="mt-5">Gefahrene Distanzen</h3>
      <Line data={props.carDistanceDataline} options={{ responsive: true }} />
    </MDBContainer>
  );
  return (
    <MDBContainer>
      <h3 className="mt-5">Gefahrene Distanzen wird geladen</h3>
        <div className="mx-auto">
          <SpinnerPage/>
        </div>
    </MDBContainer>
  )
}
export default AllVehiclesDistanceOverview;