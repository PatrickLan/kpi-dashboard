import { getFetchData } from './fetch_data_client';
import { CarPoolResults } from '../model/car_pool_results_interface';
import { CarPoolData } from '../model/car_pool_interface';

// Fetch carPoolData "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle"

let url: string = "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle";

export const getCarData = async (): Promise<CarPoolResults> => {
    const carPool = await getFetchData(url) as CarPoolData[];
    const carPoolResults = carPool[0].results;
    
    return carPoolResults;
};


