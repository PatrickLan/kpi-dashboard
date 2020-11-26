import {CarReservationsArrayVersions} from './car_reservations_array_versions_interface';

export interface CarReservationsArray{


            id: number,
            note: string,
            reservation_start: string,
            start_real: null | string,
            start_booked: null | string,
            start_first_tripsegment: null | string,
            reservation_end: null | string,
            end_real: null | string,
            end_booked: null | string,
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
    versions: CarReservationsArrayVersions[],
    odometer_start: number | null,
    odometer_end: number | null
}

