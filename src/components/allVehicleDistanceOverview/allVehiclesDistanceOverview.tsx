import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { getCarData } from '../../services/car_pool_data';
import { getCarReservationData } from '../../services/car_reservation_data';
import moment from 'moment';
import { getUpdatedMonthArray } from '../../services/current_month_array';
import { createDataset } from '../../services/createLineChartDataset';
import  randomRGBColor  from '../../services/randomRgbColor';


const AllVehiclesDistanceOverview: React.FC = () => {  

  const [dataline, setDataline] = useState({});

  const getChartData = async () => {
    let carArray: any = [];
    let distanceDatasets = [];

    // Liste mit den Fahrzeugen fetchen
    carArray = await getCarData();

    //Alle Reservierungsdaten der letzten 12 Monate fetchen
    let first = "01";
    let firstDayOfThirteenMonthsAgo = moment().subtract(8, 'months').format('YYYY-MM-DD').substring(0, 8)+first;     
    let firstDayOfCurrentMonth = moment().format('YYYY-MM-DD').substring(0, 8)+first;
    let start_gte = `${firstDayOfThirteenMonthsAgo}T00:00`;
    let end_lte = `${firstDayOfCurrentMonth}T00:00`;
    const reservationData: any = await getCarReservationData(start_gte, end_lte);

    //Array mit den letzten 12 Monaten importieren
    let arrayWithLastTwelveMonths = await getUpdatedMonthArray();

    //Array mit den zurückgelegten Distanzen (Reihenfolge wie arrayWithLastTwelveMonths)
    let distanceArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // loop durch fahrzeugliste
    let carReservations:any = [];

    for ( let i=0; i < carArray.length; i++) {
      let actualCarId = carArray[i].id;
      let label = carArray[i].type;
     
      //loop durch die reservierungen um die Reservierungen des gesuchten Fahrzeugs zu bekommen und im Array zu sichern
      for ( let j=0; j < reservationData.length; j++) {
        if (reservationData[j].vehicle.id === actualCarId){
          carReservations.push(reservationData[j])
        }
      }

      //loop durch das Array mit den Reservierung des Fahrzeugs um die gefahrene Distanz zu bekommen
      for (let i=0; i<carReservations.length; i++){
        // zurückgelegt Distanz/Fahrzeug/Monat für die Distanzkomponente
        let distancesTraveled = carReservations[i].distance;

        // gefahrene Zeit für die Zeitkomponente


        let actualReservationMonth = carReservations[i].end_booked.slice(5, 7);
        let searchedMonth: string = "";

        //index des ReservierungsMonats in arrayWithLastTwelveMonths bekommen
        switch(actualReservationMonth){
          case "01":
            searchedMonth = "Januar";
            break;
          case "02":
            searchedMonth = "Februar";
            break;
          case "03":
            searchedMonth = "März";
            break;
          case "04":
            searchedMonth = "April";
            break;
          case "05":
            searchedMonth = "Mai";
            break;  
          case "06":
            searchedMonth = "Juni";
            break;  
          case "07":
            searchedMonth = "Juli";
            break;
          case "08":
            searchedMonth = "August";
            break;
          case "09":
            searchedMonth = "September";
            break;
          case "10":
            searchedMonth = "Oktober";
            break;
          case "11":
            searchedMonth = "November";
            break;
          case "12":
            searchedMonth = "Dezember";
            break;
       }

       let searchedIndex =  arrayWithLastTwelveMonths.indexOf(searchedMonth);
       distanceArray[searchedIndex] += distancesTraveled;
      }

      let distanceDataset = createDataset(label, distanceArray, randomRGBColor());
      distanceDatasets.push(distanceDataset);
      distanceArray =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      carReservations=[];
    }

    let distanceData = {
      labels: arrayWithLastTwelveMonths,
      datasets: distanceDatasets
    }
    setDataline(distanceData);
  }

  useEffect (()=>{
    getChartData();
  }, [])

    return (
      <MDBContainer size="sm">
        <h3 className="mt-5">AllVehiclesDistanceOverview</h3>
        <Line data={dataline} options={{ responsive: true }} />
      </MDBContainer>
    );
}

export default AllVehiclesDistanceOverview;