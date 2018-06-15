import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'farms',
  template: `
    <ul>
      <li *ngFor="let farm of farms">
        <a href="farms/farm/{{farm._id}}">{{farm.Farm}}</a>
      </li>
    </ul>
  `,
  styles: []
})
export class FarmsComponent implements OnInit {
  public farms = [];
  constructor(public dbService : DbService) {
    this.farms = this.dbService.getData();
  }

  ngOnInit() {
  }

}
