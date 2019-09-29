import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-videohome',
  templateUrl: './videohome.component.html',
  styleUrls: ['./videohome.component.css']
})
export class VideohomeComponent implements OnInit {

  selectedVideo: Video;
  getResult: boolean;
  videos: Video[] = [
    {
      "id": "1",
      "title": "Potato Pancakes (Latkes)",
      "url": "https://www.youtube.com/embed/knZsdrqi5EQ",
      "description": "Chef Kevin Belton shreds potatoes (the easy way!), then seasons and flattens them on a griddle for a potato pancake that is crunchy outside and tender inside. An excellent side dish for any meal! For over 20 years Chef Kevin Belton has demonstrated the fundamentals of New Orleans cooking to appreciative audiences from around the world. Most recently, as host of the public television series New Orleans Cooking with Kevin Belton, the Creole chef takes viewers on a tasty tour of New Orleans. From Classic French to soul food to German, Irish, and Italian influences, he explores the diverse mix of cultures that contribute to the distinctive food of the Crescent City."
    },
    {
      "id": "2",
      "title": "Grill-Ready Spareribs",
      "url": "https://www.youtube.com/embed/_5LgrBik0Qg",
      "description": "The secret to tender, moist, perfectly grilled spareribs is precooking them “under pressure” in a Pressure Cooker or Canner. In this episode of Chef Kevin Belton’s Cooking Secrets, he shares his tips on making perfect ribs for two or 20.The creole chef and host of the public television series “New Orleans Cooking with Kevin Belton” has been teaching the fundamentals of New Orleans cooking to appreciative audiences from around the world for over 20 years. Belton, who was recognized as one of the top Louisiana chefs by the American Culinary Federation, has been a featured chef and guest on numerous food programs including Emeril Live; Ready Set Cook; Live Love Lunch; Food Fighters; Taste of America; and Eating in the Bayou. In his public television series, Belton pulls back the curtain to show viewers that economy and simplicity are hallmarks of New Orleans’ flavorful cuisine. “Everybody says you make it look so easy, but I teach them that it is easy."
    },
    {
      "id": "3",
      "title": "Light and Tasty Crab Cakes",
      "url": "https://www.youtube.com/embed/6PlYXiUZlSE",
      "description": "In this episode of Chef Kevin Belton’s Cooking Secrets he reveals an unusual technique for making light and tasty crab cakes. This recipe blends fresh crab with a flavor mixture that accentuates its sweetness without unnecessary ingredients.The creole chef and host of the public television series “New Orleans Cooking with Kevin Belton” has been teaching the fundamentals of New Orleans cooking to appreciative audiences from around the world for over 20 years. Belton, who was recognized as one of the top Louisiana chefs by the American Culinary Federation, has been a featured chef and guest on numerous food programs including Emeril Live; Ready Set Cook; Live Love Lunch; Food Fighters; Taste of America; and Eating in the Bayou. In his public television series, Belton pulls back the curtain to show viewers that economy and simplicity are hallmarks of New Orleans’ flavorful cuisine. “Everybody says you make it look so easy, but I teach them that it is easy.”"
    },
    {
      "id": "4",
      "title": "French Quarter Beignets",
      "url": "https://www.youtube.com/embed/AGkd28_kwec",
      "description": "Beignets are a New Orleans tradition and, though seemingly difficult to make, are really quite easy when Chef Kevin Belton walks you through the steps and all the fine details of making these heavenly pastries. Beignets are tiny golden pillows of yeast doughnuts, deep-fried and coated in confectioner’s sugar. A sensational treat, especially when served warm with friends and family.For over 20 years Chef Kevin Belton has demonstrated the fundamentals of New Orleans cooking to appreciative audiences from around the world. Most recently, as host of the public television series New Orleans Cooking with Kevin Belton, the Creole chef takes viewers on a tasty tour of New Orleans. From Classic French to soul food to German, Irish, and Italian influences, he explores the diverse mix of cultures that contribute to the distinctive food of the Crescent City."
    },
    {
      "id": "5",
      "title": "Baked Catfish with Bienville",
      "url": "https://www.youtube.com/embed/9E-COWVmzx8",
      "description": "Beignets are a New Orleans tradition and, though seemingly difficult to make, are really quite easy when Chef Kevin Belton walks you through the steps and all the fine details of making these heavenly pastries. Beignets are tiny golden pillows of yeast doughnuts, deep-fried and coated in confectioner’s sugar. A sensational treat, especially when served warm with friends and family.For over 20 years Chef Kevin Belton has demonstrated the fundamentals of New Orleans cooking to appreciative audiences from around the world. Most recently, as host of the public television series New Orleans Cooking with Kevin Belton, the Creole chef takes viewers on a tasty tour of New Orleans. From Classic French to soul food to German, Irish, and Italian influences, he explores the diverse mix of cultures that contribute to the distinctive food of the Crescent City."
    }
  ]
  constructor(private _commonservice: CommonService) {
    this.getResult = this._commonservice.hideVideo;
  }

  ngOnInit() {
    this.getResult = false;
    console.log(this.getResult);
    console.log(this._commonservice.hideVideo);
    this.getResult = this._commonservice.hideVideo;
    console.log(this.getResult);
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);

  }

}
