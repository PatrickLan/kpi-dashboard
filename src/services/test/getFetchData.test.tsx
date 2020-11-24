import { getFetchData } from '../fetch_data_client';

describe('test fetch', () =>  {

test('fetch carPool', async () => {
    const fetch = await getFetchData("https://devteilautos.zemtu.com/marketplace/api/v2/vehicle");
    expect(fetch).toBeCalled;
    expect(fetch).not.toBeNull();
  });

  test('fetch carReservationPool', async () => {
    const fetch = await getFetchData("https://devteilautos.zemtu.com/api/v2/reservationaccounting/?reservation_start__gte=2020-01-01T00:00&reservation_end__lte=2020-01-02T00:00");
    expect(fetch).toBeCalled;
    expect(fetch).not.toBeNull();
  });
});