import {CarReservationResultsVersions} from './car_reservations_results_versions_interface';

export interface CarReservationResults{


            id: number,
            note: string,
            reservation_start: string,
            start_real: null | string,
            start_booked: string,
            start_first_tripsegment: null | string,
            reservation_end: string,
            end_real: null | string,
            end_booked:  string,
            end_last_tripsegment: null | string,
            note_billing: null | string,
            purpose: number,
            owner: {
                id: number,
                external_user_id: null | string
            },
            vehicle: {
                id: number,
                type: string,
                captions: [string | null, string | null, string | null],
                label: string,
                brand: string,
                model: string,
                address1: string,
                city: string,
                zip: string,
                timezone: string
            },

    created: string | null,
    modified: string | null,
    distance: number | null,
    lift_offer: boolean,
    state: string | null,
    versions: CarReservationResultsVersions[],
    odometer_start: number | null,
    odometer_end: number | null
}

