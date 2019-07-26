import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { IOrder } from '../Interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  /*
  Admin component.
  Gets the orders made and saved, from the API adress and lists them. 
  Also making it possible to delete orders. 
  */

  ordersList: IOrder;
  constructor(private orderService: CartService) { }

  /*Fetching/deleting orders from CartService and subscribing to the result
    Calling the OnInit method again for making it updating the OrdersList.
  */

  ngOnInit() {
    this.orderService.getOrders(this.ordersList).subscribe(result =>{
      this.ordersList = result;
    });
  }
  delete(deleteThis){
    this.orderService.deleteOrder(deleteThis).subscribe(deleted =>{
      deleteThis = deleted;
      this.ngOnInit();
    });
  }

}
