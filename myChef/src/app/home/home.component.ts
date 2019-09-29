import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.title = "CHEF KEVIN BELTON"
  }

  onButtonClick() {
    this.router.navigate(['/', 'meetkevin']);
  }
}
