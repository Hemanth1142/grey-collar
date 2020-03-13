import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm:FormGroup;
  formValues:[];
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'user_type':new FormControl('',Validators.required),
      'name':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'dob':new FormControl('',Validators.required),
      'gender':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'confirmPassword':new FormControl('',Validators.required),
      'terms':new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    console.log(this.signUpForm);
    this.formValues = this.signUpForm.value;

  }


}
