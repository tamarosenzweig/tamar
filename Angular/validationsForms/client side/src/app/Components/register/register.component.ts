import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ValidateId } from '../../shared/validation/tzValidation';
import { CountryService } from '../../shared/services/country.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
// import {ValidateId}from ''
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  lands: any;
  registerForm: FormGroup;
  user: User;
  users:User[];
  constructor(private fb: FormBuilder, private countryService: CountryService,private userService:UserService) {
    //  this.countries = [];
    this.registerForm = this.fb.group({
      id: ['', ValidateId],
      name: [],
      age: ['',Validators.required],
      isMale: ['false'],
      country: ['Israel']
    });
  }
  ngOnInit() {
    this.countryService.getAllCountries().subscribe(data => {
      this.lands = data;
    })
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.user = JSON.parse(JSON.stringify(this.registerForm.value));
      console.warn(this.user);
      this.userService.addUser(this.user);
      window.location.reload();
     // document.reload();
      // alert(this.user.name + " added successfuly");
      // this.reset();
      
    }
  }
  // reset() {
  //   for (let name in this.registerForm.controls) {
        // this.registerForm.controls[name].updateValue('');
        // this.registerForm.controls[name].setErrors(null);
   
  get name() {
    return this.registerForm.get('name');
  }
  get id() {
    return this.registerForm.get("id");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get isMale() {
    return this.registerForm.get("isMale");
  }
  get country() {
    return this.registerForm.get("country");
  }


}
