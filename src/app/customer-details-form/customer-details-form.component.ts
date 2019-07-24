import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IOrder } from '../Interfaces/IOrder';

@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.css']
})
export class CustomerDetailsFormComponent implements OnInit {
  @Input() cart: IOrder;
  @Output() placeOrder = new EventEmitter();

  customerForm;

  constructor(private customerDetails: FormBuilder) { }

  onSubmit() {
    this.placeOrder.emit(this.customerForm);
  }
  ngOnInit() {

    this.customerForm = this.customerDetails.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', Validators.required],
      state: ['', Validators.required],

    })
  }

}
