import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-videodetails',
  templateUrl: './videodetails.component.html',
  styleUrls: ['./videodetails.component.css']
})
export class VideodetailsComponent implements OnInit, OnChanges {
  @Input() video;
  editTitle: boolean = false;
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
