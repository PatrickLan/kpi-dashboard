import { getFetchData } from '../fetch_data_client';
import { CarPoolData } from '../../model/car_pool_interface';
import { CarPoolResultsArray } from '../../model/car_pool_results_array_interface';

describe('test fetch', () =>  {

test('fetch carPool', async () => {
    const fetch = await getFetchData("https://devteilautos.zemtu.com/marketplace/api/v2/vehicle");
    expect(fetch).toBeCalled;
    expect(fetch).not.toBeNull();
    expect(fetch).toMatchObject([{
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
  });
});