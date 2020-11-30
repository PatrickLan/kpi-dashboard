import { CarPoolResults } from './car_pool_results_interface';

export interface CarPoolData {
    count: number;
    next: null | string
​    previous: null | string;
    results: CarPoolResults[];
}