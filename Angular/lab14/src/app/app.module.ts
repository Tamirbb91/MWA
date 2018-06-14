import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven.component';
import { HttpService } from './services/http.service';
import { ThanksComponent } from './thanks.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES : Routes = [
  { path: 'thanks', component : ThanksComponent},
  { path: '', component : DataDrivenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
