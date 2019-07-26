import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../Interfaces/IProduct';
import { IProductInCart } from '../Interfaces/IProductInCart';
import { IOrder } from '../Interfaces/IOrder';
import * as moment from 'moment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  /*
  Checkout page. Getting the cart saved in local storage. 
  Making it possible to, again, add or delete products in cart. 
  When finished it saved the products to orderRows and saves 
  the orderRows with information from the customerDetailsForm. And the time the order was made 
  Saving all information to order.
  */

  @Input() movies: IProductInCart[];
  order: IOrder;
  totalSum: number;

  constructor(public shoppingCart: CartService) { }

  ngOnInit() {
    this.movies = this.shoppingCart.getCart();
  }

  onPlacingOrder(customerForm) {

    let now = moment().format('YYYY-MM-DD HH:mm:ss');
    let orderRows = [];

    for (let i = 0; i < this.movies.length; i++) {
      orderRows.push({ ProductId: this.movies[i].movie.id, Amount: this.movies[i].amount });
    }

    this.order = {
      id: 0, 
      companyId: 18, 
      created: now, 
      createdBy: customerForm.value.name, 
      paymentMethod: "Credt", 
      totalPrice: this.totalSum,
      status: 0, 
      orderRows: orderRows
    };
    console.log(this.order);

    this.shoppingCart.addOrder(this.order).subscribe();
    this.shoppingCart.cart = [];

  }

  addMovieToCart(movieToAdd: IProduct){
    this.shoppingCart.add(movieToAdd);
    this.calculateTotalPrice();
  }
  deleteMovieFromCart(movieToRemove: IProduct) {
    this.shoppingCart.delete(movieToRemove);
    this.calculateTotalPrice();
  }
  calculateTotalPrice(){
    this.totalSum = 0;

    for(let i = 0; i < this.shoppingCart.cart.length; i++){
      this.totalSum += this.shoppingCart.cart[i].movie.price * this.shoppingCart.cart[i].amount;
    }
  }

}
