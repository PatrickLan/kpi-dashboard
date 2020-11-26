import { CarPoolData } from '../model/car_pool_interface';
import { CarReservations } from '../model/car-reservations_interface';

//Fetch all Data CarPoolData or CarReservations

export const getFetchData = async (startUrl: string): Promise<CarPoolData[] | CarReservations[]> => {

    const authorizationToken: string = "Token 2920a7e21d0b6ef854c0a53c7299403424086e11";
    const fetchData: CarPoolData[] | CarReservations[] = [];
    let urlArray: string[] = [startUrl];
    let nextPage = null;
    let hasNextPage: boolean = true;

    while (hasNextPage) {

        await fetch(urlArray[urlArray.length - 1], {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": authorizationToken
            },
        })
            .then(response => response.json())

            .then(data => {
                nextPage = data.next;
                fetchData.push(data);

                if (nextPage != null) {
                    hasNextPage = true
                    urlArray.push(nextPage);
                }
                else {
                    hasNextPage = false
                };

            })
            .catch(err => console.log('error', err))
    };

    return fetchData;
};

