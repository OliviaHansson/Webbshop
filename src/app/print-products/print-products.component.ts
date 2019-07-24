import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-print-products',
  templateUrl: './print-products.component.html',
  styleUrls: ['./print-products.component.css']
})
export class PrintProductsComponent implements OnInit {
  constructor(public shoppingCartService: CartService) { }
  
  // fetching the products through the input-decorator from home-component.
  @Input() product: IProduct;

  modal = undefined;

  ngOnInit() {}

  openModal(){
    this.modal = document.getElementById("movieModal" + this.product.id);
    this.modal.style.display = "block";    
  }
  closeModal() {
    this.modal = document.getElementById("movieModal" + this.product.id);
    this.modal.style.display = "none";
  }
  addMovieToCart(){
    this.shoppingCartService.add(this.product);
  }
  deleteMovieFromCart() {
    this.shoppingCartService.delete(this.product);
  }

}
