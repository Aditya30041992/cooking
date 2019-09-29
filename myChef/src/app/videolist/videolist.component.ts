import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Video } from '../video';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  outputs: ['SelectVideo']
})
export class VideolistComponent implements OnInit {

  @Input() videos: any;
  public SelectVideo = new EventEmitter();
  constructor(private _commonservice: CommonService) { }

  ngOnInit() {
  }

  onSelect(video: Video) {
    this._commonservice.hideVideo = false;
    this.SelectVideo.emit(video);
  }


}
