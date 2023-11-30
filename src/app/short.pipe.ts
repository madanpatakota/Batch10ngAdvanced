import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short'
})
export class ShortPipe implements PipeTransform {


            // valueexpresion     inputparams
  transform(value: string, inputValue?: number): unknown {

    console.log(value);

    //var updatedValue = value.substring(0,10) + "      ...More details"

    var updatedValue = value.substring(0, inputValue) + "      ...More details"


    //console.log(args);

    return updatedValue;
  }

}
