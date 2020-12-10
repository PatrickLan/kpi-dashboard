import { CarPoolData } from '../model/car_pool_interface';
import { CarReservations } from '../model/car-reservations_interface';

//Fetch all Data CarPoolData or CarReservations

export const getFetchData = async (url: string): Promise<CarPoolData[] | CarReservations[]> => {

    const authorizationToken: string = "Token 2920a7e21d0b6ef854c0a53c7299403424086e11";
    const fetchData: CarPoolData[] | CarReservations[] = [];
 

        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorizationToken
            },
        })
            .then(response => response.json())

            .then(data => {
                fetchData.push(data);
            })
            .catch(err => console.log('error', err))
 
            console.log("fetchdata", fetchData)
    return fetchData;
};

