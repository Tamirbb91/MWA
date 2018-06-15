import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmsComponent } from './farms.component';
import { DbService } from './db.service';
import { FarmDetailsComponent } from './farm-details.component';
import { NotFoundComponent } from './not-found.component';

export const FARM_ROUTES = [
  { path:'', component: FarmsComponent},
  { path:'farm/:id', component: FarmDetailsComponent},
  { path:'notFound', component: NotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [DbService],
  declarations: [FarmsComponent, FarmDetailsComponent, NotFoundComponent]
})
export class FarmersMarketModule { }
