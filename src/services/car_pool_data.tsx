import { getFetchData } from './fetch_data_client';
import { CarPoolResults } from '../model/car_pool_results_interface';

let url: string = "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle";

export const getCarData = async (): Promise<CarPoolResults[]> => {
    
    const carPool = await getFetchData(url) as CarPoolResults[];

    return carPool;
};


