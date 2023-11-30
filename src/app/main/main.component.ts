import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Batch10ngAdvanced';


  Customer = { Name: 'Robert', Email: 'Robert@gmail.com', Password: '!@&&*9*' };


  CustomerLatestRecord : any = {};

  evtCustomerReceiveInfo(value : any){
    
      console.log("Appcomponet is fired");
      console.log("Taking the value from child . i.e " + value);

      this.CustomerLatestRecord = value ;

      // {
      //    Name : ______
      //    Email : ______
      //    Password : __________
      // }


  }



}
