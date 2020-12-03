import { getFetchData } from '../fetch_data_client';
import {CarPoolData} from '../../model/car_pool_interface';
import {CarReservations} from '../../model/car-reservations_interface';


describe('test fetch', () =>  {

test('fetch carPool', async () => {
    const fetch = await getFetchData("https://devteilautos.zemtu.com/marketplace/api/v2/vehicle");
    expect(fetch).toBeCalled;
    expect(fetch).not.toBeNull();
    expect(fetch).toMatchObject<CarPoolData[]>([{
      "count": 4,
      "next": null,
      "previous": null,
      "results": [
          {
              "id": 526,
              "type": "Wibbel VW up!",
              "captions": [
                  "Wibbel VW up!",
                  "Wibbeltstraße 1",
                  "Oelde"
              ],
              "address1": "Wibbeltstraße 1",
              "zip": "59302",
              "city": "Oelde",
              "homebase": {
                  "type": "Point",
                  "coordinates": [
                      8.1461792,
                      51.83496509999998
                  ]
              },
              "thumbnail_url": "/media/cache/d9/dd/d9dd6d7cc58ed18e3256d702dbacf080.png",
              "distance": {
                  "value": null,
                  "unit": "meter"
              },
              "carsharinggroup": {
                  "id": 204,
                  "name": "Alle Fahrzeuge",
                  "description": "Diese Gruppe enthält alle Fahrzeuge an allen Standorten des Teilautos Carsharing.\r\n\r\nDie Nutzer registrieren sich bei Teilautos und beantragen die Mitgliedschaft in dieser Carsharing-Gruppe. Der Akkrediteur bestätigt die Identifizierung durch POSTIDENT und lässt den Nutzer für diese Gruppe mit all ihren Fahrzeugen zu.",
                  "url": null
              }
          },
          {
              "id": 578,
              "type": "Unna Renault ZOE",
              "captions": [
                  "Unna Renault ZOE",
                  "Friedrich-Ebert-Straße 17",
                  "Unna"
              ],
              "address1": "Friedrich-Ebert-Straße 17",
              "zip": "59425",
              "city": "Unna",
              "homebase": {
                  "type": "Point",
                  "coordinates": [
                      7.6874637,
                      51.54249470000002
                  ]
              },
              "thumbnail_url": "/media/cache/87/e6/87e6895648df25e40e562ead9b2d146e.png",
              "distance": {
                  "value": null,
                  "unit": "meter"
              },
              "carsharinggroup": {
                  "id": 213,
                  "name": "Fahrtwind",
                  "description": "",
                  "url": "https://www.teilautos.de/standorte/"
              }
          },
          {
              "id": 632,
              "type": "Elektra Renault ZOE",
              "captions": [
                  "Elektra Renault ZOE",
                  "Landsbergplatz 7",
                  "Drensteinfurt"
              ],
              "address1": "Landsbergplatz 7",
              "zip": "48317",
              "city": "Drensteinfurt",
              "homebase": {
                  "type": "Point",
                  "coordinates": [
                      7.7373776,
                      51.7984535
                  ]
              },
              "thumbnail_url": "/media/cache/20/a6/20a63c4bf8138e62e7ad7070d3fd4352.png",
              "distance": {
                  "value": null,
                  "unit": "meter"
              },
              "carsharinggroup": {
                  "id": 204,
                  "name": "Alle Fahrzeuge",
                  "description": "Diese Gruppe enthält alle Fahrzeuge an allen Standorten des Teilautos Carsharing.\r\n\r\nDie Nutzer registrieren sich bei Teilautos und beantragen die Mitgliedschaft in dieser Carsharing-Gruppe. Der Akkrediteur bestätigt die Identifizierung durch POSTIDENT und lässt den Nutzer für diese Gruppe mit all ihren Fahrzeugen zu.",
                  "url": null
              }
          },
          {
              "id": 878,
              "type": "Albersloh Ford Fiesta",
              "captions": [
                  "Albersloh Ford Fiesta",
                  "Münsterstr. 8",
                  "Sendenhorst-Albersloh"
              ],
              "address1": "Münsterstr. 8",
              "zip": "48324",
              "city": "Sendenhorst-Albersloh",
              "homebase": {
                  "type": "Point",
                  "coordinates": [
                      7.7307672,
                      51.8681816
                  ]
              },
              "thumbnail_url": "/media/cache/8e/5c/8e5cde10fb8791e00d41b7fbd3fae159.png",
              "distance": {
                  "value": null,
                  "unit": "meter"
              },
              "carsharinggroup": {
                  "id": 204,
                  "name": "Alle Fahrzeuge",
                  "description": "Diese Gruppe enthält alle Fahrzeuge an allen Standorten des Teilautos Carsharing.\r\n\r\nDie Nutzer registrieren sich bei Teilautos und beantragen die Mitgliedschaft in dieser Carsharing-Gruppe. Der Akkrediteur bestätigt die Identifizierung durch POSTIDENT und lässt den Nutzer für diese Gruppe mit all ihren Fahrzeugen zu.",
                  "url": null
              }
          }
      ]
  }])
  });

  test('fetch carReservationPool', async () => {
    const fetch = await getFetchData("https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=2020-01-01T00:00&reservation_end__lte=2020-01-02T00:00");
    expect(fetch).toBeCalled;
    expect(fetch).not.toBeNull();
    expect(fetch).toMatchObject<CarReservations[]>([{
        "count": 5,
        "next": null,
        "previous": null,
        "results": [
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
        ]
    }]);
  });
});