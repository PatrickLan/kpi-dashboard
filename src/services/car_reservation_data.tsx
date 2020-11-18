import { getFetchData } from './fetch_data_client';
import {CarReservations} from '../model/car-reservations_interface';


// Fetch reservationData for all cars. From start_gte till end_lte

export const getCarReservationData = async (start_gte: string, end_lte: string) => {
    let url: string = `https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`
    const carReservationArrays: CarReservations[] = [] 
    
    const carReservationFetch = await getFetchData(url);
    carReservationFetch.forEach((carReservationArray:any) => {
        for(let i = 0; i < carReservationArray.results.length; i++){
        carReservationArrays.push(carReservationArray.results[i])
        }
    });

    return carReservationArrays;
};
