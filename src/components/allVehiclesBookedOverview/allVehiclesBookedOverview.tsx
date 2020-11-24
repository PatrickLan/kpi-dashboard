import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const AllVehiclesBookedOverview = (props: any) => {  

    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">AllVehiclesBookedOverview</h3>
        <Line data={props.bookedTimeDataline} options={{ responsive: true }} />
      </MDBContainer>
    );
}

export default AllVehiclesBookedOverview;