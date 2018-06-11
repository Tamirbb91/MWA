import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>Counter component</h2>
  <p>
    Counter Value : <button (click)="decrement()">-</button>
    {{ counterValue }}
    <button (click)="increment()">+</button>
  </p>
    
  `,
  styles: ['p{color: green}']
})

export class CounterComponent implements OnInit{
  @Input() counter : number = 0;
  @Output() counterChange : EventEmitter<number> = new EventEmitter();
  counterValue : number = 0;

  constructor() { }

  ngOnInit(): void {
    this.counterValue = this.counter;
  }

  increment(){
    this.counter = ++this.counterValue;
    this.counterChange.emit(this.counterValue);
  }

  decrement(){
    this.counter = --this.counterValue;
    this.counterChange.emit(this.counterValue);
  }
}
