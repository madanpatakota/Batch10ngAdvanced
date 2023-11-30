import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

            
  transform(value: any, ...args: any[]): any {


    /* i know that here args is nothing but colleciton of input parameters : unknown */

    var firstParameter      = args[0];    // textbox      uk
    console.log(firstParameter);

    var secondParameter      = args[1];    // textbox      uk
    console.log(secondParameter);
    
    var data  : any         = value;      // Array        


    /* you should return the objects which contains the texbox value ( so here you have to check from the information key) */ 
    

    // filter and indexOf  // for


    var filterData = data.filter((x:any)=> x.information.indexOf(firstParameter) > -1)

    // var filterData = data.filter((x:any)=> { return  x.information.indexOf(firstParameter) } > -1)



    /* how to filer the data based on the array */




    return filterData;
  }

}
