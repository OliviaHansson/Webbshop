import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { IProductInCart } from '../Interfaces/IProductInCart';
import { IOrder } from '../Interfaces/IOrder';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient ) { }

  cart: IProductInCart[];

  saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(this.cart));
  }

  getCart() {
    this.cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    return this.cart;
  }
  /* add function, loops trough the cart to first check if there's a matching
    product id in the cart to the one who's beeing added. If so, it only adds to 
    the amount of the movie in cart. Otherwise it pushes the new movie in to the cart.
  */

  add(movieToAdd: IProduct) {
    let foundMovie = false;

    for (let i = 0; i < this.cart.length; i++) {

      if(movieToAdd.id === this.cart[i].movie.id){
        this.cart[i].amount++;
        foundMovie = true;
        this.saveCart();
      }
    }
    if(!foundMovie) {
      this.cart.push({ movie: movieToAdd, amount: 1, totalPrice: movieToAdd.price });
      this.saveCart();
    }
  
  }

  /* Same thing here. If there's an matching product id in the cart with an amount of
    more then 1, it decrease the amount of the product in cart. Otherwise, removes the
    whole product from cart.
  */

  delete(movieToDelete: IProduct) {
    for (let i = 0; i < this.cart.length; i++) {
      if(movieToDelete.id === this.cart[i].movie.id && this.cart[i].amount > 1 ) {
        this.cart[i].amount--;
        this.saveCart();
      }
      else if(movieToDelete.id === this.cart[i].movie.id && this.cart[i].amount <= 1) {
        let index = this.cart.indexOf(this.cart[i]);
        this.cart.splice(index, 1);
        this.saveCart();
      }
    }
  }
  
  addOrder(order: IOrder) {
    return this.http.post<IOrder>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", order);
  }
  getOrders(getOrder: IOrder) {
    return this.http.get<IOrder>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=18");
  }
  deleteOrder(orderIdToDelete: number){
    return this.http.delete("https://medieinstitutet-wie-products.azurewebsites.net/api/orders/" + orderIdToDelete);
  }
  
}


