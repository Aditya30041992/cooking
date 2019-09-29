import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myChef';
  constructor() {
    this.title = 'Aditya';
  }

  ngOnInit() {
    this.title = 'kanchan'
  }

}
