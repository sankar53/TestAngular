import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigateByUrl("/dashboard");

  }

  signUp() {

    this.router.navigateByUrl("/signup");

  }

}
