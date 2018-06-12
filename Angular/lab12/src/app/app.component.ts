import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hercomponent [items] = "movies"></app-hercomponent>
  `,
  styles: ['']
})
export class AppComponent {
  movies: string[] = ['Car', 'Book', 'Table', 'Chair', 'Shirt'];
}
