import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import SpinnerPage from '../spinner/Spinner';

const AllVehiclesBookedOverview = (props: any) => {  
  
  if(props.carBookedTimeDataline.datasets !== undefined)

    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">Gebuchte Stunden</h3>
        <Line data={props.carBookedTimeDataline} options={{ responsive: true }} />
      </MDBContainer>
    );
    return (
      <MDBContainer>
        <h3 className="mt-5">Gebuchte Stunden wird geladen</h3>
          <div className="mx-auto">
            <SpinnerPage/>
          </div>
      </MDBContainer>
    )
}

export default AllVehiclesBookedOverview;