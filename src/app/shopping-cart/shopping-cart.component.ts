import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IProduct } from '../Interfaces/IProduct';
import { IProductInCart } from '../Interfaces/IProductInCart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart: IProductInCart[];

  constructor(public shoppingCart: CartService) { }
  @Input() movies: IProductInCart;
  @Input() product: IProduct;

  dropDownCart = document.getElementById("dropDownCart");

  /* 
  This component hold the dropdown cart displayed at the homepage when clicking
  the cart symbol. It toggles the cart for easily showing/hiding it. And adds or
  removes product that was once added to the cart.
  */

  ngOnInit() {
  this.cart = this.shoppingCart.getCart();
  }

  toggleDropDown(){
    document.getElementById("dropDownCart").classList.toggle("show");
  }
  addMovieToCart(movieToAdd: IProduct){
    this.shoppingCart.add(movieToAdd);
  }
  deleteMovieFromCart(movieToRemove: IProduct) {
    this.shoppingCart.delete(movieToRemove);
  }
}//hej
