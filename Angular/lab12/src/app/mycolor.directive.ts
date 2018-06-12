import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @Output() clickEvent = new EventEmitter();

  private colors : Array<string> = ['green', 'blue', 'purple', 'brown', 'red', 'black'];
  private colorIndex : number = 0;
  constructor(private element : ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.cursor = 'pointer';
  }
  
  @HostListener('click') changeColor(){
    this.element.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.clickEvent.emit(this.element.nativeElement.style.color);
  }
}
