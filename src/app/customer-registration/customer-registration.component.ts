import { Component,
EventEmitter,
Input, 
Output ,
ViewChild ,
ElementRef ,
OnChanges, 
OnInit,
AfterViewInit,
AfterContentInit,
ContentChild,
AfterContentChecked,
AfterViewChecked,
OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent 
implements
 OnChanges,
 OnInit,
 AfterViewInit,
 AfterContentInit ,
 AfterContentChecked,
 AfterViewChecked,
 OnDestroy {

  /*Life cycle hooks*/



  /*We are taking the data.*/
   @Input('CustomerInfo') CustomerInfo : any;

   
   /* 1 .Here i am getting the data from parent
      2. CustomerInfo value is :  { Name: 'Robert', Email: 'Robert@gmail.com', Password: '!@&&*9*' };
      3. Parent is giving Robert. but i want to change the value of Name - Peter



      // I have created the situation.
      I want the control of CustomerInfo because i want to update the Name(Peter).

   */

    ngOnChanges(): void {
       console.log("input changes are" , this.CustomerInfo);
      // { Name :  "Robert" , Password : "!@&&*9*" , Email : "Robert@gmail.com" } 
        this.CustomerInfo.Name = "Peter";
        console.log('ngOnchanges changes are loaded');
    }

    ngOnInit(): void {
        //subcriptions activites we do here .... API , Routers , Servies related subscrptions we have to do here .....
        console.log('Page Component has loaded');
    }

   




   
 /* Output decorator which is  for sends the data to the parent*/   

//  Title :
//  1. We know that we are passing the data from Child to the Parent.
// 1. When you want to pass the data..                       ----> When i am going to click on submit button ()
// 2. Who will be take care for prepare the data..           ----> EventEmitter

  @Output('CustomerEventEmitter') customerEmitter = new EventEmitter<any>();
   //    var                         abc


   /* Here i am taking the reference of the 3 elements . for that i am using @viewchild */
   @ViewChild("CustomerName") _vCustomerName : ElementRef<any>;
   @ViewChild("CustomerEmail") _vCustomerEmail : ElementRef<any>;
   @ViewChild("CustomerPassword") _vCustomerPassword : ElementRef<any>;

   /*I want to add the default data to the viewchild */
  //  email : 'peter@gmail.com'
  //  password : '!@#$%^'
  ngAfterViewInit(): void {
      this._vCustomerEmail.nativeElement.value = 'Peter@gmail.com';
      this._vCustomerPassword.nativeElement.value = '!@#$%^';
      console.log("Page view childs are loaded");
  }


  /*We can take the control of contentchild values.*/
  @ContentChild("CustomerMessage")  cCustomerMessage: ElementRef;
  ngAfterContentInit(): void {
     this.cCustomerMessage.nativeElement.value = "Peter is a SalesRep having 2 kids";
     console.log("Page content childs are loaded");
  }

  ngAfterViewChecked(): void {
     console.log("View has changes");
  }

  ngAfterContentChecked(): void {
     console.log("Content changes");
  }

  
  



   evtPostData(){
    /* In event emitter i have taken any type so that i can pass any value like number , boolean , object , array 
       As of now i am taking the object */
       //this.customerEmitter.emit("Test");

       console.log("Click the submit button - child");

       //var obj = { Name : "jobn"};

       var CustomerObj = {
         Name : this._vCustomerName.nativeElement.value ,
         Email : this._vCustomerEmail.nativeElement.value ,
         Password : this._vCustomerPassword.nativeElement.value
       }

       //this.customerEmitter.emit( "Test" );
       this.customerEmitter.emit( CustomerObj );

   }

   evtClearData(){
      this.CustomerInfo = { Name : "" , Email : "" , Password : ""  };
   }




   ngOnDestroy(): void {
     //  //unsubcriptions activites we do here .... API , Routers , Servies related subscrptions we have to do here .....
     //   _________________.unsusbcire() 
     // if you are jumping from one page to another page . that means previous page you are destroying and entering the new page.
      console.log("Page is destroying");
   }




}
