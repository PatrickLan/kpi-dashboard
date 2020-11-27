import {CarReservations} from '../model/car_reservations_interface';
import { getCarReservationData } from '../services/car_reservation_data';
import moment from 'moment';


//Alle Reservierungsdaten der vorherigen letzten 12 Monate fetchen
const getReservationsFromLastTwelveMonths = async (): Promise<CarReservations[]> => {

    let first: string = "01";
    let firstDayOfThirteenMonthsAgo: string = moment().subtract(13, 'months').format('YYYY-MM-DD').substring(0, 8)+first;     
    let firstDayOfCurrentMonth: string = moment().format('YYYY-MM-DD').substring(0, 8)+first;
    let start_gte: string = `${firstDayOfThirteenMonthsAgo}T00:00`;
    let end_lte: string = `${firstDayOfCurrentMonth}T00:00`;
    const reservationData: CarReservations[]  = await getCarReservationData(start_gte, end_lte);

    return reservationData;
}

export default getReservationsFromLastTwelveMonths;