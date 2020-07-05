import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './modules/about/about.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { HomeComponent } from './modules/home/home.component';
import { DIYKitsComponent } from './modules/diy-kits/diy-kits.component';
import { EducationComponent } from './modules/education/education.component';
import { EventsComponent } from './modules/authentication/events/events.component';
import { SpecialEventsComponent } from './modules/authentication/special-events/special-events.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  //{ path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: 'events', component: EventsComponent },
  // { path: 'special', component: SpecialEventsComponent },
  // { path: 'login', component: LoginComponent },

  // DISABLED FOR INITIAL DEPLOY
  // { path: 'register', component: RegisterComponent },
  // { path: 'About', component: AboutComponent },
  { path: 'Gallery', component: GalleryComponent },
  // { path: 'DIY_Kits', component: DIYKitsComponent },
  // { path: 'Education', component: EducationComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
