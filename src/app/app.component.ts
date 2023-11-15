import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Batch10ngAdvanced';


  Customer = { Name: 'Robert', Email: 'Robert@gmail.com', Password: '!@&&*9*' };


  evtCustomerReceiveInfo(value : any){
      console.log("Appcomponet is fired");
      console.log("Taking the value from child . i.e " + value);
  }



}
