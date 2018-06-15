import { Component, OnInit, Input } from '@angular/core';
import { DbService } from './db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'farm-details',
  template: `
    <div>
      <p>{{farm._id}}</p>
      <p>{{farm.Farm}}</p>
      <ul>
        <li *ngFor="let product of farm.produce">{{product}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {
  public farm;
  public id;

  constructor(private route: ActivatedRoute, public dbService : DbService, public route1: Router ) {
    const farms = this.dbService.getData();
    route.params.subscribe(params => {this.id = params['id'];})
    for(let item of farms){
      if(item._id == this.id){
        this.farm = item;
        return;
      }
    }
    this.route1.navigate(['/notFound']);
  }

  ngOnInit() {
  }

  

}
