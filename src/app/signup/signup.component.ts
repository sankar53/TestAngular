import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: any;
  username: any;
  password: any;
  confirmPassword: any;
  email: any;
  country: any;
  city: any;
  gender = "male";
  graduated: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    let obj = {
      name: this.name,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
      country: this.country,
      city: this.city,
      gender: this.gender,
      graduated: this.graduated
    }
    this.router.navigate(["/login"]);
  }

}
