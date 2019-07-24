import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { HeaderComponent } from '../header/header.component';
import { PrintProductsComponent } from '../print-products/print-products.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeaderComponent, PrintProductsComponent ],
      providers: [ 
        {provide: DataService, useClass: MockDataService}
      ]
    })
    .compileComponents();
    dataService = TestBed.get(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set chosen category to selectedCategory', () =>{
    expect()
  })

  // it('should get data', () => {
  //   let movies = dataService.getData();
  //   expect(movies.length).toBe(5);
  // })
});
