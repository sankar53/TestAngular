import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [];
  constructor() { }

  ngOnInit() {
    this.users = [
      { name: "Sankar", id: "123567" },

      { name: "Mani", id: "25674" },

      { name: "Saro", id: "764536" },
    ];
  }

}
