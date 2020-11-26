import {Dataset} from '../model/dataset_interface';

export function createDataline ( labels: string[], datasets:Dataset[] ) {
    return {
        labels: labels,
        datasets: datasets
    }
}