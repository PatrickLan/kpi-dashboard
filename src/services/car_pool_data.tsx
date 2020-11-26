import { getFetchData } from './fetch_data_client';
import { CarPoolResultsArray } from '../model/car_pool_results_array_interface';
import { CarPoolData } from '../model/car_pool_interface';

// Fetch carPoolData "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle"

let url: string = "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle";

export const getCarData = async (): Promise<CarPoolResultsArray> => {
    const carPool = await getFetchData(url) as CarPoolData[];
    const carPoolResults = carPool[0].results;
    
    return carPoolResults;
};


