import { Directive, OnInit, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})

export class MyvisibilityDirective {
  @Input() visibility : boolean = false;
  constructor(private element : ElementRef) { }

  ngOnInit(){
    if(this.visibility){
      this.element.nativeElement.style.visibility = "visible";
    } else {
      this.element.nativeElement.style.visibility = "hidden";
    }    
  }
}
