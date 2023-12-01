import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
  HostListener,
  HostBinding,
  Host
} from '@angular/core';

@Directive({
  selector: '[ngadvancedcolor]',
})
export class NgadvancedcolorDirective implements OnInit, OnChanges {
  constructor(public elementref: ElementRef, public render: Renderer2) {}

  @Input('color') color: string;
  @Input('leavecolor') leavecolor : string;

  @HostBinding('style.color') stylecolor : string;
  @HostBinding('style.color') styleleavecolor : string;
  


  ngOnChanges(): void {

    //this.elementref.nativeElement.style.background = this.color;

    // this.render.setStyle(this.elementref.nativeElement,'background-color',this.color);
    this.stylecolor = this.color;
    this.styleleavecolor = this.leavecolor;
  
  }


  
  ngOnInit(): void {
    // take the element
    // take the input from the element
    //  this.elementref.nativeElement.style.background = this.color;
    //  this.render.setStyle(this.elementref.nativeElement,'background-color','color');

    
  }



  @HostListener('mouseover') mouseover(){
    this.render.setStyle
    (this.elementref.nativeElement,'background-color', this.stylecolor);
  }


  
  @HostListener('mouseleave') mouseleave(){
    this.render.setStyle
    (this.elementref.nativeElement,'background-color', this.styleleavecolor);
  }
  






}
