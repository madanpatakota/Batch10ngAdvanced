import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-customer-registration-history',
  templateUrl: './customer-registration-history.component.html',
  styleUrls: ['./customer-registration-history.component.css']
})
export class CustomerRegistrationHistoryComponent {


  @Input('CustomerRecord') CustomerRecord : any;


  CustomerRecords : any = [];

  /*getclick*/
  
  evtGetLatestRecords(){
      console.log("Click");
      this.CustomerRecords.push(this.CustomerRecord);
  }

}
