import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const AllVehiclesDistanceOverview = (props: any) => {  

    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">AllVehiclesDistanceOverview</h3>
        <Line data={props.carDistanceDataline} options={{ responsive: true }} />
      </MDBContainer>
    );
}

export default AllVehiclesDistanceOverview;