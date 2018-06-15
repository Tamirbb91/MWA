import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router'

import { AppComponent } from './app.component';
import { FarmersMarketModule, FARM_ROUTES } from './farmers-market/farmers-market.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FarmersMarketModule,
    RouterModule.forRoot([
      { path: 'farms', children: FARM_ROUTES}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
