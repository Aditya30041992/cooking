import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';
import { VideohomeComponent } from './videohome/videohome.component';
import { VideodetailsComponent } from './videodetails/videodetails.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { MeetkevinComponent } from './meetkevin/meetkevin.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'videohome', component: VideohomeComponent },
  { path: 'videolist', component: VideolistComponent },
  { path: 'videodetails', component: VideodetailsComponent },
  { path: 'recepies', component: RecepiesComponent },
  { path: 'meetkevin', component: MeetkevinComponent },
  { path: 'con', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
