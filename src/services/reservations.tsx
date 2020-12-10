import {CarReservationResults} from '../model/car_reservation_results_interface';
import { getCarReservationData } from '../services/car_reservation_data';
import moment from 'moment';
import {getCountFetch} from '../services/reservationPages';
import {getFetchData} from '../services/fetch_data_client';

//Alle Reservierungsdaten der vorherigen letzten 12 Monate fetchen
// const getReservationsFromLastTwelveMonths = async (): Promise<CarReservationResults[]> => {
    const getReservationsFromLastTwelveMonths = async () => {

    let first: string = "01";
    let firstDayOfThirteenMonthsAgo: string = moment().subtract(13, 'months').format('YYYY-MM-DD').substring(0, 8)+first;     
    let firstDayOfCurrentMonth: string = moment().format('YYYY-MM-DD').substring(0, 8)+first;
    let start_gte: string = `${firstDayOfThirteenMonthsAgo}T00:00`;
    let end_lte: string = `${firstDayOfCurrentMonth}T00:00`;

    let firstUrl: string = `https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`
    let pagesNumber = await getCountFetch(firstUrl);

    let arrayWithUrls: string[] = [firstUrl];

    // erzeugen eines Array mit den URLs aller Seiten der Reservierungen
    for ( let i = 2; i <= pagesNumber; i++){        
        arrayWithUrls.push(`https://devteilautos.zemtu.com/api/v2/?page=${i}&reservationaccounting/?reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`)
    }

    let promises = arrayWithUrls.map(url => getFetchData(url));

    Promise.all(promises).then(results => {
        console.log("results", results)
    })

    // Promise.all(arrayWithUrls).then(values=> console.log("TEST", values))
    // const reservationData: CarReservationResults[]  = await getCarReservationData(start_gte, end_lte);

    // return reservationData;
    return pagesNumber
}

export default getReservationsFromLastTwelveMonths;