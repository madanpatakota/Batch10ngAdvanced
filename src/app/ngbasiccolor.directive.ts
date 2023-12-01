import { Directive , OnInit , ElementRef } from '@angular/core';

@Directive({
  selector: '[ngBasicColor]'
})

export class NgbasiccolorDirective implements OnInit {

  constructor(public elementref : ElementRef) { }

  ngOnInit(): void {

      //  this.elementref.nativeElement   // paragrpah
        this.elementref.nativeElement.style.background = "green";

        this.elementref.nativeElement.style.color 
        = "yellow";



  }

}
