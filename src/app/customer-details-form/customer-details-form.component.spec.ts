import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerDetailsFormComponent } from './customer-details-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('CustomerDetailsFormComponent', () => {
  let component: CustomerDetailsFormComponent;
  let fixture: ComponentFixture<CustomerDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDetailsFormComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
