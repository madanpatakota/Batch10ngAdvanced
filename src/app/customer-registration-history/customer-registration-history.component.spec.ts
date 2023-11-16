import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegistrationHistoryComponent } from './customer-registration-history.component';

describe('CustomerRegistrationHistoryComponent', () => {
  let component: CustomerRegistrationHistoryComponent;
  let fixture: ComponentFixture<CustomerRegistrationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRegistrationHistoryComponent]
    });
    fixture = TestBed.createComponent(CustomerRegistrationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
