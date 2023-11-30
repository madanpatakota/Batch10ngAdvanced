import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerRegistrationHistoryComponent } from './customer-registration-history/customer-registration-history.component';
import { PipesComponent } from './pipes/pipes.component';
import { MainComponent } from './main/main.component';
import { ShortPipe } from './short.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    CustomerDetailsComponent,
    CustomerRegistrationHistoryComponent,
    PipesComponent,
    MainComponent,
    ShortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
