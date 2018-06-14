import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpService } from './services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'data-driven',
  templateUrl: 'data-driven.component.html',
  styles: []
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder, public httpService : HttpService, public router : Router) {
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'post': ['', this.postValidator]
    })
  }

  postValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value.length < 10) {
      return { 'post': true };
    }
    return null;
  }

  ngOnInit() { }

  onSubmit() {
    console.log(this.myForm);
    this.router.navigate(['/thanks']);
  }

  getData() {
    this.httpService.getUserData().subscribe(
      data => {
        this.myForm.controls['name'].setValue(data['name']);
        this.myForm.controls['email'].setValue(data['email']);
      },
      error => console.error(error),
      () => console.log("data loaded")
    );

    this.httpService.getPosts().subscribe(
      data => {
        this.myForm.controls['post'].setValue(data[0]['body']);   
      },
      error => console.error(error),
      () => console.log("data loaded") 
    );
  }

}
