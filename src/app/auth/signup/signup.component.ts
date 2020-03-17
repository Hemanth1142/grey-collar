import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  formValues:[];
  constructor() { }
  userType:FormControl = new FormControl('',Validators.required);
  name:FormControl = new FormControl('',Validators.required);
  email:FormControl = new FormControl('',[Validators.required,Validators.email]);
  dob:FormControl = new FormControl('',Validators.required);
  gender:FormControl = new FormControl('',Validators.required);
  password:FormControl = new FormControl('',Validators.required);
  confirmPassword:FormControl = new FormControl('',Validators.required);
  terms:FormControl = new FormControl('',Validators.required);

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userType':this.userType,
      'name':this.name,
      'email':this.email,
      'dob':this.dob,
      'gender':this.gender,
      'password':this.password,
      'confirmPassword':this.confirmPassword,
      'terms':this.terms
    },{validators:this.checkConmfirmPassword})
  }
  onSubmit(){
    if(this.signUpForm.invalid){
      Object.values(this.signUpForm.controls).forEach(control => {
        control.markAsTouched();
      })
    }
    console.log(APP_BASE_HREF);
  }
  checkConmfirmPassword(form:FormGroup){
    let confirmPassword = form.get('confirmPassword').value;
    let password = form.get('password').value;
    if(password != confirmPassword ){
      return { notMatched: true };
    } 
    return { notMatched: false };
  }


}
