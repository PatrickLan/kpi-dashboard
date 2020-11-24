import {getFetchData} from './fetch_data_client';

let url:string = "https://devteilautos.zemtu.com/marketplace/api/v2/vehicle";

export const getCarData = async () => {
    const carPool = await getFetchData(url);
    const carPoolResults = carPool[0].results;
    
    // console.log("carPoolResults",carPoolResults)
    return carPoolResults;
    }


