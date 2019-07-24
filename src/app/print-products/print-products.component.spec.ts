import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrintProductsComponent } from './print-products.component';
import { MockDataService } from '../services/mock-data.service';
import { CartService } from '../services/cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockCartService } from '../services/mock-cart.service';

describe('PrintProductsComponent', () => {
  let component: PrintProductsComponent;
  let fixture: ComponentFixture<PrintProductsComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ PrintProductsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ {provide: CartService, useClass: MockCartService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    localStorage.clear();

    fixture = TestBed.createComponent(PrintProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add movie to cart', () => {
    let service = new MockDataService();
    component.product = service.mockDataList[0];
    component.addMovieToCart();
    expect(component.shoppingCartService.cart.length).toBe(1);
  })

  it('should remove movie from cart', () => {
    component.deleteMovieFromCart();
    expect(component.shoppingCartService.cart.length).toBe(0);
  })
});
