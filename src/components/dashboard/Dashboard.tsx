import React,{useEffect, useState} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./Dashboard.css";
import AllVehiclesDistanceOverview from "../allVehicleDistanceOverview/allVehiclesDistanceOverview";
import moment from 'moment';
import { getCarReservationData } from '../../services/car_reservation_data';
import { getUpdatedMonthArray } from '../../services/current_month_array';
import { getCarData } from '../../services/car_pool_data';
import { createDataset } from '../../services/createLineChartDataset';
import  randomRGBColor  from '../../services/randomRgbColor';
import {createDataline} from '../../services/createDataline';
import AllVehiclesBookedOverview from '../../components/allVehiclesBookedOverview/allVehiclesBookedOverview';
import {Dataset} from '../../model/dataset_interface';
import {Dataline} from '../../model/dataline_interface'

const Dashboard = ()  => {
    const [carDistanceDataline, setCarDistanceDataline] = useState<Dataline | {}>({});
    const [carBookedTimeDataline, setCarBookedTimeDataline] = useState<Dataline | {}>({});

    const getChartData = async () => {
      let carArray: any = [];
      let distanceDatasets: Dataset[] = [];
      let bookedTimeDatasets: Dataset[] = [];
  
      // Liste mit den Fahrzeugen fetchen
      carArray = await getCarData();
  
      //Alle Reservierungsdaten der letzten 12 Monate fetchen
      let first: string = "01";
      let firstDayOfThirteenMonthsAgo: string = moment().subtract(3, 'months').format('YYYY-MM-DD').substring(0, 8)+first;     
      let firstDayOfCurrentMonth: string = moment().format('YYYY-MM-DD').substring(0, 8)+first;
      let start_gte: string = `${firstDayOfThirteenMonthsAgo}T00:00`;
      let end_lte: string = `${firstDayOfCurrentMonth}T00:00`;
      const reservationData: any = await getCarReservationData(start_gte, end_lte);
  
      //Array mit den letzten 12 Monaten importieren
      let arrayWithLastTwelveMonths: string[] = await getUpdatedMonthArray();
  
      //Arrays mit den Daten
      let distanceArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let usedTimeArray: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      
      let carReservations:any = [];
  
      // loop durch fahrzeugliste
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
  
          // gefahrene Zeit/Fahrzeug/Monat für die Zeitkomponente
          let bookedTime = (Date.parse(carReservations[i].reservation_end) - Date.parse(carReservations[i].reservation_start))/3600000;
  
          //index des ReservierungsMonats in arrayWithLastTwelveMonths bekommen
          let actualReservationMonth: string = carReservations[i].end_booked.slice(5, 7);
          let searchedMonth: string = "";
          
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
  
         let searchedIndex: number =  arrayWithLastTwelveMonths.indexOf(searchedMonth);
         
         //Daten im Array der Komponenten in der selben Reihenfolge wie im Array mit Monaten sortieren
         distanceArray[searchedIndex] += distancesTraveled;
         usedTimeArray[searchedIndex] += bookedTime;
        }
  
    
        //Erstellen der Datasets zur grafischen Darstellung
        let color: string = randomRGBColor();

        let distanceDataset: Dataset  = createDataset(label, distanceArray, color);
        distanceDatasets.push(distanceDataset);

        let bookedTimeDataset: Dataset = createDataset(label, usedTimeArray, color);
        bookedTimeDatasets.push(bookedTimeDataset);

        //Reset nach dem Loop
        usedTimeArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        distanceArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        carReservations=[];
      }
  
      let distanceDataline = createDataline(arrayWithLastTwelveMonths, distanceDatasets);
      setCarDistanceDataline(distanceDataline);

      let bookedTimeDataline = createDataline(arrayWithLastTwelveMonths, bookedTimeDatasets);
      setCarBookedTimeDataline(bookedTimeDataline);
    }
  
    useEffect (()=>{
      getChartData();
    }, [])


  return (
    <MDBContainer >
      <MDBRow >
        <MDBCol >
          <AllVehiclesDistanceOverview carDistanceDataline={carDistanceDataline}/>
        </MDBCol>
        <MDBCol>
          <AllVehiclesBookedOverview carBookedTimeDataline={carBookedTimeDataline}/>
        </MDBCol>
      </MDBRow>
      <MDBRow> 
        <MDBCol>{/* <ChartsPage/> */}</MDBCol>
        <MDBCol>{/* <ChartsPage/> */}</MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Dashboard;
