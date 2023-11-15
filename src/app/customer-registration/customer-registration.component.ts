import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent {


  /*We are taking the data.*/
   @Input('CustomerInfo') CustomerInfo : any;


   
 /* Output decorator which is  for sends the data to the parent*/   

//  Title :
//  1. We know that we are passing the data from Child to the Parent.
// 1. When you want to pass the data..                       ----> When i am going to click on submit button ()
// 2. Who will be take care for prepare the data..           ----> EventEmitter

  @Output('CustomerEventEmitter') customerEmitter = new EventEmitter<any>();
   //    var                         abc

   evtPostData(){
    /* In event emitter i have taken any type so that i can pass any value like number , boolean , object , array 
       As of now i am taking the object */
       //this.customerEmitter.emit("Test");

       console.log("Click the submit button - child");
       this.customerEmitter.emit("Test");

   }







}
