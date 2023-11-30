import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

   courseName = "ANgular";

   todayDate = new Date();


   constructor(){
    //this.bigSentence.length
   }


   bigSentence = `Createcustom pipes to encapsulate transformations that are not provided with the built-in pipes. Then, use your custom pipe in template expressions, the same way you use built-in pipes —to transform input values to output values for display.`;


   anotherBigSentece =  `way you use built-in pipes —to transform input values to output values for display . way you use built-in pipes —to transform input values to output values for display`;


   anotherSentence = "Hello world";


   anyInformation = "";
   employees = [
    {
      name: 'John',
      skill: '.net',
      started: new Date(),
      information: 'He is in london working as a senior software engineer',
    },
    {
      name: 'robert',
      skill: 'java',
      started: new Date(),
      information: 'He is in austraila working as a  software engineer',
    },
    {
      name: 'peter',
      skill: 'Phython',
      started: new Date(),
      information: 'He is in us working as a Team lead',
    },
    {
      name: 'Clerk',
      skill: 'Angular',
      started: new Date(),
      information: 'He is in uk working as a Admin',
    },
  ];


 


}
