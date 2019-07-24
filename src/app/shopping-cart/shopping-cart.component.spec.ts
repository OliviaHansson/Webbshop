import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingCartComponent } from './shopping-cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockCartService } from '../services/mock-cart.service';
import { CartService } from '../services/cart.service';
import { MockDataService } from '../services/mock-data.service';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ {provide: CartService, useClass: MockCartService }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increase amount of movie by 1', () => {
    let dataService = new MockDataService();
    let movie = dataService.mockDataList[0];
    
    component.addMovieToCart(movie);
    expect(component.shoppingCart.cart.length).toBe(1);

    component.addMovieToCart(movie);
    expect(component.shoppingCart.cart.length).toBe(1);
    expect(component.shoppingCart.cart[0].amount).toBe(2);
  })

  // it('should remove 1 from amount of movie', () => {
  //   component.deleteMovieFromCart();
  //   expect(component.shoppingCart.cart[0].amount).toBe(2);

  // })
});
