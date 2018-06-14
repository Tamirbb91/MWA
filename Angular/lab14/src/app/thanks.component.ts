import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thanks',
  template: `
    <p>
      thanks for your submission !
    </p>
  `,
  styles: []
})
export class ThanksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello from thanks');
  }

}
