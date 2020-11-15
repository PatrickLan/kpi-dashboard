import { CarPoolResultsArray } from './car_pool_results_array_interface';

export interface CarPoolData {
    count: number;
    next: null | string
​    previous: null | string;
    results: CarPoolResultsArray;
}