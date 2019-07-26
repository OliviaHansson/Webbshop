import { Injectable } from '@angular/core';
import { IProductInCart } from '../Interfaces/IProductInCart';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockCartService {
  constructor() { }

  mockCartList: IProductInCart[] = [
    {movie: {id: 0, name: "The Dark Night Rises", description: "Really good movie", price: 200, imageUrl: "www.hej.se",
      year: 2012, added: 2013, productCategory: []}, 
    amount: 2, 
    totalPrice: 400}
  ];
  
  fetchCart():Observable<IProductInCart[]>{
    return of(this.mockCartList);
  }
}
// Here's the mock data used for testing methods of the shopping cart.
