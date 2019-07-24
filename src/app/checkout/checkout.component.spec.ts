import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { CustomerDetailsFormComponent } from '../customer-details-form/customer-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockCartService } from '../services/mock-cart.service';
import { CartService } from '../services/cart.service';
import { MockDataService } from '../services/mock-data.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutComponent, ShoppingCartComponent, CustomerDetailsFormComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [ {provide: CartService, useClass: MockCartService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increase amount of movie by 1', () => {
    const dataService = new MockDataService();
    let movie = dataService.mockDataList[0];
    
    component.addMovieToCart(movie);
    expect(component.shoppingCart.cart.length).toBe(1);

    component.addMovieToCart(movie);
    expect(component.shoppingCart.cart.length).toBe(1);
    expect(component.shoppingCart.cart[0].amount).toBe(2);

  });

  it ('should add two diffrent movies', () => {
    let dataService = new MockDataService();
    let movie = dataService.mockDataList[0];
    let movie2 = dataService.mockDataList[1];

    component.addMovieToCart(movie);
    expect(component.shoppingCart.cart.length).toBe(2);
    expect(component.shoppingCart.cart[1].amount).toBe(1);

  });

  it('should remove 1 from amount of movie', () => {
    let dataService = new MockDataService();
    let movie = dataService.mockDataList[0];

    component.deleteMovieFromCart(movie);
    expect(component.shoppingCart.cart.length).toBe(1);
    expect(component.shoppingCart.cart[0].amount).toBe(1);

  });
  
});
