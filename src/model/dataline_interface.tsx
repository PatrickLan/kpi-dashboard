import {Dataset} from '../model/dataset_interface';

export interface Dataline {
    labels: string[],
    datasets: Dataset
}