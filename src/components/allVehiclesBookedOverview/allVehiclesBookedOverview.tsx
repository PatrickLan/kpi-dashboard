import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import {Dataline} from '../../model/dataline_interface'
import SpinnerPage from '../spinner/Spinner'

const AllVehiclesBookedOverview = (props: any) => {  
  
  if(props.bookedTimeDataline.datasets !== undefined)

    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">AllVehiclesBookedTimeOverview</h3>
        <Line data={props.bookedTimeDataline} options={{ responsive: true }} />
      </MDBContainer>
    );
    return (
      <MDBContainer>
          <div className="mx-auto">
            <SpinnerPage/>
          </div>
      </MDBContainer>
    )
}

export default AllVehiclesBookedOverview;