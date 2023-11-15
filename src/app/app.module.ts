import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
