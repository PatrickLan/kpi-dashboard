import { getFetchData } from './fetch_data_client';
import { CarPoolResults } from '../model/car_pool_results_interface';
import { CarPoolData } from '../model/car_pool_interface';

// Fetch carPoolData "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle"

let url: string = "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle";

export const getCarData = async (): Promise<any> => {
    const carPool = await getFetchData(url) as CarPoolData[];
    console.log("carpool", carPool)
    // const carPoolResults: CarPoolResults[]  =  carPool[0].results

    return carPool;
};


