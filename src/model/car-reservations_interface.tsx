import {CarReservationResults} from './car_reservation_results_interface'

export interface CarReservations {

    count: number;
    next: null | string;
    previous: null | string;
    results: [CarReservationResults];
}