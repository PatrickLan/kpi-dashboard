import { CarPoolData } from '../model/car_pool_interface';
import { CarReservations } from '../model/car-reservations_interface';
import { CarPoolResults } from '../model/car_pool_results_interface';
import {CarReservationResults} from '../model/car_reservation_results_interface';

//Fetch all Data CarPoolData or CarReservations

    export const getFetchData = async (url: string): Promise<CarReservations[] | CarPoolResults[] | CarReservationResults[]> => {

    const authorizationToken: string = "Token 2920a7e21d0b6ef854c0a53c7299403424086e11";
    let fetchData: CarReservations[] | CarPoolResults[] | CarReservationResults[] = [];
 
        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorizationToken
            },
        })
            .then(response => response.json())
            .then(data => {
                fetchData = data.results;
            })
            .catch(err => console.log('error', err))

    return fetchData;
};

