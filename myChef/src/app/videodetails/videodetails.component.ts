import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.css'],
  inputs: ['video']
})
export class VideodetailsComponent implements OnInit, OnChanges {

  private editTitle: boolean = false;
  constructor() { }


  ngOnInit() {
  }

  ngOnChanges() {

    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

}
