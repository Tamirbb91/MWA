import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hercomponent',
  template: `
    <ul>
      <li #myItem *ngFor="let item of items; let num = index" appUpper appMyvisibility [visibility] = "true" appMycolor (clickEvent)="itemClicked($event)">{{num + 1}}. {{ myItem.style.color ? myItem.style.color:'black' }} - {{ item }}</li>
    </ul>
  `,
  styles: []
})
export class HercomponentComponent {
  @Input() items: Array<string>;
  constructor() { }

  itemClicked(color) {
    console.log("Color changed in component into " + color);
  }
}
