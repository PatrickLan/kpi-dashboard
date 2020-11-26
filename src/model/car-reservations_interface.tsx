import {CarReservationsArray} from './car_reservations_array_interface'

export interface CarReservations {

    count: number;
    next: null | string;
    previous: null | string;
    results: [CarReservationsArray];
}