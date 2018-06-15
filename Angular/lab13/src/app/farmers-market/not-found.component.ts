import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <p>
      farm not found!
    </p>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
