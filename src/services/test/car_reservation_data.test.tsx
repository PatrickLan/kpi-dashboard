import {getCarReservationData} from '../car_reservation_data';

describe('test getCarReservationData', () => {
test('getCarReservationData', async () => {
    const carResData = await getCarReservationData("2020-01-01T00:00","2020-01-03T00:00");
    expect(carResData).not.toBeNull();
    expect(carResData).toMatchObject({});
  });    
});