import { getCarReservationData } from '../car_reservation_data';
import { CarReservationResults } from '../../model/car_reservation_results_interface';

describe('test getCarReservationData', () => {
  test('getCarReservationData', async () => {
    const carResData = await getCarReservationData("2020-01-01T00:00", "2020-01-02T00:00");
    expect(carResData).not.toBeNull();
    expect(carResData).toMatchObject<CarReservationResults[]>([
      {
        "id": 515342,
        "note": "",
        "reservation_start": "2020-01-01T07:00:00+01:00",
        "start_real": null,
        "start_booked": "2020-01-01T06:00:00Z",
        "start_first_tripsegment": null,
        "reservation_end": "2020-01-01T15:00:00+01:00",
        "end_real": null,
        "end_booked": "2020-01-01T14:00:00Z",
        "end_last_tripsegment": null,
        "note_billing": null,
        "purpose": 0,
        "owner": {
          "id": 20167,
          "external_user_id": null
        },
        "vehicle": {
          "id": 555,
          "type": "Flitzer Renault Clio",
          "captions": [
            "Flitzer Renault Clio",
            "Schürenstraße 17",
            "Sassenberg"
          ],
          "label": "Flitzer",
          "brand": "Renault",
          "model": "Clio",
          "address1": "Schürenstraße 17",
          "city": "Sassenberg",
          "zip": "48336",
          "timezone": "Europe/Berlin"
        },
        "created": "2019-12-31T19:26:21.734525+01:00",
        "modified": "2019-12-31T23:41:42.606553+01:00",
        "distance": null,
        "lift_offer": false,
        "state": "deleted",
        "versions": [
          {
            "modified": "2019-12-31T22:41:42.606000Z",
            "state": "deleted",
            "reservation_start": "2020-01-01T06:00:00Z",
            "reservation_end": "2020-01-01T14:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          },
          {
            "modified": "2019-12-31T18:26:21.734000Z",
            "state": "opened",
            "reservation_start": "2020-01-01T06:00:00Z",
            "reservation_end": "2020-01-01T14:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          }
        ],
        "odometer_start": null,
        "odometer_end": null
      },
      {
        "id": 515347,
        "note": "",
        "reservation_start": "2020-01-01T12:00:00+01:00",
        "start_real": null,
        "start_booked": "2020-01-01T11:00:00Z",
        "start_first_tripsegment": null,
        "reservation_end": "2020-01-01T16:00:00+01:00",
        "end_real": null,
        "end_booked": "2020-01-01T15:00:00Z",
        "end_last_tripsegment": null,
        "note_billing": null,
        "purpose": 0,
        "owner": {
          "id": 24439,
          "external_user_id": null
        },
        "vehicle": {
          "id": 680,
          "type": "Silberpfeil Opel Corsa",
          "captions": [
            "Silberpfeil Opel Corsa",
            "Hauptstraße 5",
            "Alverskirchen"
          ],
          "label": "Silberpfeil",
          "brand": "Opel",
          "model": "Corsa",
          "address1": "Hauptstraße 5",
          "city": "Alverskirchen",
          "zip": "48351",
          "timezone": "Europe/Berlin"
        },
        "created": "2019-12-31T21:39:47.205783+01:00",
        "modified": "2019-12-31T22:39:20.226838+01:00",
        "distance": null,
        "lift_offer": false,
        "state": "deleted",
        "versions": [
          {
            "modified": "2019-12-31T21:39:20.226000Z",
            "state": "deleted",
            "reservation_start": "2020-01-01T11:00:00Z",
            "reservation_end": "2020-01-01T15:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          },
          {
            "modified": "2019-12-31T20:39:47.205000Z",
            "state": "opened",
            "reservation_start": "2020-01-01T11:00:00Z",
            "reservation_end": "2020-01-01T15:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          }
        ],
        "odometer_start": null,
        "odometer_end": null
      },
      {
        "id": 515350,
        "note": "",
        "reservation_start": "2020-01-01T13:30:00+01:00",
        "start_real": "2020-01-01T13:56:00+01:00",
        "start_booked": "2020-01-01T12:30:00Z",
        "start_first_tripsegment": "2020-01-01T12:57:00Z",
        "reservation_end": "2020-01-01T15:00:00+01:00",
        "end_real": "2020-01-01T15:18:00+01:00",
        "end_booked": "2020-01-01T14:30:00Z",
        "end_last_tripsegment": "2020-01-01T14:17:00Z",
        "note_billing": null,
        "purpose": 0,
        "owner": {
          "id": 20167,
          "external_user_id": null
        },
        "vehicle": {
          "id": 555,
          "type": "Flitzer Renault Clio",
          "captions": [
            "Flitzer Renault Clio",
            "Schürenstraße 17",
            "Sassenberg"
          ],
          "label": "Flitzer",
          "brand": "Renault",
          "model": "Clio",
          "address1": "Schürenstraße 17",
          "city": "Sassenberg",
          "zip": "48336",
          "timezone": "Europe/Berlin"
        },
        "created": "2019-12-31T23:42:17.328730+01:00",
        "modified": "2020-01-02T09:48:21.270866+01:00",
        "distance": 26.0,
        "lift_offer": false,
        "state": "closed",
        "versions": [
          {
            "modified": "2020-01-02T08:48:21.270000Z",
            "state": "closed",
            "reservation_start": "2020-01-01T12:30:00Z",
            "reservation_end": "2020-01-01T14:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T12:56:37.124000Z",
            "state": "protected",
            "reservation_start": "2020-01-01T12:30:00Z",
            "reservation_end": "2020-01-01T14:00:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T12:56:37.124000Z",
            "state": "protected",
            "reservation_start": "2020-01-01T12:30:00Z",
            "reservation_end": "2020-01-01T14:30:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          },
          {
            "modified": "2019-12-31T22:42:17.328000Z",
            "state": "opened",
            "reservation_start": "2020-01-01T12:30:00Z",
            "reservation_end": "2020-01-01T14:30:00Z",
            "note": "",
            "purpose": 0,
            "lift_offer": false
          }
        ],
        "odometer_start": 31419.0,
        "odometer_end": 31445.0
      },
      {
        "id": 515433,
        "note": "Update",
        "reservation_start": "2020-01-01T14:00:00+01:00",
        "start_real": "2020-01-01T14:12:00+01:00",
        "start_booked": "2020-01-01T13:00:00Z",
        "start_first_tripsegment": null,
        "reservation_end": "2020-01-01T14:00:00+01:00",
        "end_real": "2020-01-01T14:12:00+01:00",
        "end_booked": "2020-01-01T13:30:00Z",
        "end_last_tripsegment": null,
        "note_billing": null,
        "purpose": 10,
        "owner": {
          "id": 13342,
          "external_user_id": null
        },
        "vehicle": {
          "id": 672,
          "type": "Emma Renault ZOE",
          "captions": [
            "Emma Renault ZOE",
            "Am Rathaus 11",
            "Ostbevern"
          ],
          "label": "Emma",
          "brand": "Renault",
          "model": "ZOE",
          "address1": "Am Rathaus 11",
          "city": "Ostbevern",
          "zip": "48346",
          "timezone": "Europe/Berlin"
        },
        "created": "2020-01-01T14:10:48.685142+01:00",
        "modified": "2020-01-01T14:13:41.637172+01:00",
        "distance": 0.0,
        "lift_offer": false,
        "state": "closed",
        "versions": [
          {
            "modified": "2020-01-01T13:13:41.637000Z",
            "state": "closed",
            "reservation_start": "2020-01-01T13:00:00Z",
            "reservation_end": "2020-01-01T13:00:00Z",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T13:12:39.400000Z",
            "state": "protected",
            "reservation_start": "2020-01-01T13:00:00Z",
            "reservation_end": "2020-01-01T13:30:00Z",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T13:10:48.685000Z",
            "state": "opened",
            "reservation_start": "2020-01-01T14:00:00+01:00",
            "reservation_end": "2020-01-01T14:30:00+01:00",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          }
        ],
        "odometer_start": null,
        "odometer_end": null
      },
      {
        "id": 515480,
        "note": "Update",
        "reservation_start": "2020-01-01T17:00:00+01:00",
        "start_real": "2020-01-01T16:59:00+01:00",
        "start_booked": "2020-01-01T16:00:00Z",
        "start_first_tripsegment": null,
        "reservation_end": "2020-01-01T17:00:00+01:00",
        "end_real": "2020-01-01T16:59:00+01:00",
        "end_booked": "2020-01-01T16:30:00Z",
        "end_last_tripsegment": null,
        "note_billing": null,
        "purpose": 10,
        "owner": {
          "id": 13342,
          "external_user_id": null
        },
        "vehicle": {
          "id": 680,
          "type": "Silberpfeil Opel Corsa",
          "captions": [
            "Silberpfeil Opel Corsa",
            "Hauptstraße 5",
            "Alverskirchen"
          ],
          "label": "Silberpfeil",
          "brand": "Opel",
          "model": "Corsa",
          "address1": "Hauptstraße 5",
          "city": "Alverskirchen",
          "zip": "48351",
          "timezone": "Europe/Berlin"
        },
        "created": "2020-01-01T17:04:58.760626+01:00",
        "modified": "2020-01-01T17:09:28.396024+01:00",
        "distance": 0.0,
        "lift_offer": false,
        "state": "closed",
        "versions": [
          {
            "modified": "2020-01-01T16:09:28.396000Z",
            "state": "closed",
            "reservation_start": "2020-01-01T16:00:00Z",
            "reservation_end": "2020-01-01T16:00:00Z",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T16:08:05.873000Z",
            "state": "protected",
            "reservation_start": "2020-01-01T16:00:00Z",
            "reservation_end": "2020-01-01T16:30:00Z",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          },
          {
            "modified": "2020-01-01T16:04:58.760000Z",
            "state": "opened",
            "reservation_start": "2020-01-01T17:00:00+01:00",
            "reservation_end": "2020-01-01T17:30:00+01:00",
            "note": "Update",
            "purpose": 10,
            "lift_offer": false
          }
        ],
        "odometer_start": null,
        "odometer_end": null
      }
    ]);
  });
});