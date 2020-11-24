import {getCarData} from '../car_pool_data';

describe('test getCarData', () => {
    test('getCarData', async () => {
        const carData = await getCarData();
        expect(carData).not.toBeNull();
      });
});