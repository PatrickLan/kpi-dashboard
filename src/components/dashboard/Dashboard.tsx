import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Dashboard.css';
import AllVehiclesDistanceOverview from '../allVehicleDistanceOverview/allVehiclesDistanceOverview';


const FlexboxPage = () => (
    <MDBContainer>
        <MDBRow>
            <MDBCol>    
                <AllVehiclesDistanceOverview/>
            </MDBCol>
            <MDBCol>
                {/* <ChartsPage/> */}
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
                {/* <ChartsPage/> */}
            </MDBCol>
            <MDBCol>
                {/* <ChartsPage/> */}
            </MDBCol>
        </MDBRow>
    
  </MDBContainer>
);

export default FlexboxPage;