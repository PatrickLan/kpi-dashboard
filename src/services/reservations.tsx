import moment from 'moment';
import {getCountFetch} from '../services/reservationPages';
import {getFetchData} from '../services/fetch_data_client';
import {CarReservationResults} from '../model/car_reservation_results_interface';


//Alle Reservierungsdaten der vorherigen letzten 12 Monate fetchen
    const getReservationsFromLastTwelveMonths = async (): Promise<CarReservationResults[]> => {

    let first: string = "01";
    let firstDayOfThirteenMonthsAgo: string = moment().subtract(13, 'months').format('YYYY-MM-DD').substring(0, 8)+first;     
    let firstDayOfCurrentMonth: string = moment().format('YYYY-MM-DD').substring(0, 8)+first;
    let start_gte: string = `${firstDayOfThirteenMonthsAgo}T00:00`;
    let end_lte: string = `${firstDayOfCurrentMonth}T00:00`;
    
    let firstUrl: string = `https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`
    let pagesNumber = await getCountFetch(firstUrl);

    // erzeugen eines Array mit den URLs aller Seiten der Reservierungen
    let arrayWithUrls: string[] = [firstUrl];

    for ( let i = 2; i <= pagesNumber; i++){        
        arrayWithUrls.push(`https://devteilautos.zemtu.com/api/v2/reservationaccounting/?page=${i}&reservation_start__gte=${start_gte}&reservation_end__lte=${end_lte}`)
    }
    
    let promises = arrayWithUrls.map(url => getFetchData(url));
    
    const getResults = async (): Promise<CarReservationResults[]> => {

        let resultsArray: CarReservationResults[][] = [];
        let reservationArray: CarReservationResults[] = [];
        
        await Promise.all(promises).then(results => {
             resultsArray = results as CarReservationResults[][];   
        })

        for (let i = 0; i < resultsArray.length; i++){
            for (let j = 0; j < resultsArray[i].length; j++){
                reservationArray.push(resultsArray[i][j])
            }
        }
        return reservationArray
    }
    const reservationArray: CarReservationResults[] = await getResults();

    return reservationArray
}

export default getReservationsFromLastTwelveMonths;