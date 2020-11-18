import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


const AllVehiclesDistanceOverview: React.FC = () => {  

  //fahrzeugliste ziehen
  // alle reservierungen ziehen
  // monatsarray ziehen

  // loop durch fahrzeugliste und die reservierungen des jeweiligen fahrzeugs aus allen reservierungen ziehen
  //  +
  // reservierungen des fahrzeugs nach monaten sortieren
  //  +
  // stunden der jeweiligen monate ausrechnen und ab in ein neues Array

  //monatsarray mit sortierten monaten  und array mit stunden der monate an creatLineChartDataset
  
    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">Line chart</h3>
        {/* <Line data={this.state.dataLine} options={{ responsive: true }} /> */}
      </MDBContainer>
    );
  
}


export default AllVehiclesDistanceOverview;