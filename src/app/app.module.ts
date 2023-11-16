import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRegistrationHistoryComponent } from './customer-registration-history/customer-registration-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    CustomerDetailsComponent,
    CustomerRegistrationHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
