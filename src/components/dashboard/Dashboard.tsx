import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Dashboard.css';
import ChartsPage from '../dashboard/graphcomponents/Firstgraph'

;
const FlexboxPage = () => (
    <MDBContainer>
        <MDBRow>
            <MDBCol>    
                <ChartsPage/>
            </MDBCol>
            <MDBCol>
                <ChartsPage/>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <ChartsPage/>
            </MDBCol>
            <MDBCol>
                <ChartsPage/>
            </MDBCol>
        </MDBRow>
    
  </MDBContainer>
);

export default FlexboxPage;