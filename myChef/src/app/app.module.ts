import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideohomeComponent } from './videohome/videohome.component';
import { VideodetailsComponent } from './videodetails/videodetails.component';
import { SecurePipe } from './secure.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { MeetkevinComponent } from './meetkevin/meetkevin.component';
import { CommonService } from './common.service';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideolistComponent,
    VideohomeComponent,
    VideodetailsComponent,
    SecurePipe,
    HeaderComponent,
    FooterComponent,
    RecepiesComponent,
    MeetkevinComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
