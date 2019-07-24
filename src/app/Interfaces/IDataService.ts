import { Observable } from "rxjs";
import{ IProduct } from './IProduct';

export interface IDataService {
    getData(): Observable<IProduct[]>; 
}

