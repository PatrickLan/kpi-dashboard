export interface CarPoolResults{
    id: number;
    type: string;
    captions: [string, string, string];
    address1: string,
    zip: string,
    city: string,
    homebase: {},
    thumbnail_url: string,
            distance: {
                value: null | string,
                unit: null | string
            },
            carsharinggroup: {
                id: number,
                name: null | string,
                description: null | string,
                url: null | string
            }
        }