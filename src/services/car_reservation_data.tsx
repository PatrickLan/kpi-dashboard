import { getFetchData } from './fetch_data_client';
import {CarReservations} from '../model/car-reservations_interface';
import {CarReservationResults} from '../model/car_reservation_results_interface';



// Fetch reservationData for all cars. From start_gte till end_lte

export const getCarReservationData = async (start_gte: string, end_lte: string): Promise<CarReservationResults[]> => {

    let url: string = `https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`
    
    const carReservationArrays: CarReservationResults[]  = []; 
    
    const carReservationFetch: CarReservations[] = await getFetchData(url) as CarReservations[];
    console.log("carreservationsCheckIncar_reservations", carReservationFetch)
    carReservationFetch.forEach((carReservationArray:CarReservations) => { 
        
        for(let i = 0; i < carReservationArray.results.length; i++){
        carReservationArrays.push(carReservationArray.results[i])
        };
    });
    return carReservationArrays;
};
