import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Interfaces/IProduct';
import { ICategory } from '../Interfaces/ICategory';
import { Observable } from 'rxjs';
import { IDataService } from '../Interfaces/IDataService';

@Injectable({
  providedIn: 'root'
})
export class DataService implements IDataService {

  public products: IProduct[];
  public categories: ICategory[];

  constructor( private http: HttpClient ) { }

  getData(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  search(searchText:string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=' + searchText);
  }

  category(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }
}