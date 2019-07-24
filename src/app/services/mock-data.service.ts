import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  mockDataList: IProduct[] = [
    { id: 0, name: "The Movie", description: "This is a Movie", price: 120, imageUrl: "www.facebook.se", year: 1997, added: 2001, productCategory: [] },
    { id: 1, name: "A Movie", description: "This is a Movie", price: 120, imageUrl: "www.facebook.se", year: 1997, added: 2001, productCategory: [] },
  ];

  constructor() { }

}