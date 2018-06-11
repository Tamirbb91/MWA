import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Main component</h1>
    <p>Counter Value : {{ ComponentCounterValue }}</p>
    <app-counter [counter]= "ComponentCounterValue" (counterChange)="ComponentCounterValue=$event"></app-counter>  
  `,
  styles: ['p {color: blue}']
})
export class AppComponent {
  ComponentCounterValue = 5;
  title = 'app';
}
