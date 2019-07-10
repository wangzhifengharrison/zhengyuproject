import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatCardModule, MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule, Routes} from '@angular/router';
import { ResearchComponent } from './research/research.component';
import { PublicationComponent } from './publication/publication.component';
import { PeopleComponent } from './people/people.component';
import { ContactComponent } from './contact/contact.component';
import { PhotosComponent } from './photos/photos.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { PeopleoneComponent } from './peopleone/peopleone.component';
import { PeopletwoComponent } from './peopletwo/peopletwo.component';
import { PeoplethreeComponent } from './peoplethree/peoplethree.component';
import { PeoplefourComponent } from './peoplefour/peoplefour.component';
import { PeoplefiveComponent } from './peoplefive/peoplefive.component';
import { PeoplesixComponent } from './peoplesix/peoplesix.component';
import { PeoplesevenComponent } from './peopleseven/peopleseven.component';
import { PeopleeightComponent } from './peopleeight/peopleeight.component';
import { PeoplenineComponent } from './peoplenine/peoplenine.component';
import { PeopletenComponent } from './peopleten/peopleten.component';
import { PeopleelevenComponent } from './peopleeleven/peopleeleven.component';
import { PeopletwelveComponent } from './peopletwelve/peopletwelve.component';
import { PeoplethirteenComponent } from './peoplethirteen/peoplethirteen.component';
import { PeoplefourteenComponent } from './peoplefourteen/peoplefourteen.component';
import { PeoplefifteenComponent } from './peoplefifteen/peoplefifteen.component';
import { PeoplesixteenComponent } from './peoplesixteen/peoplesixteen.component';


const routeConfig: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'publication', component: PublicationComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'people/1', component: PeopleoneComponent},
  {path: 'people/2', component: PeopletwoComponent},
  {path: 'people/3', component: PeoplethreeComponent},
  {path: 'people/4', component: PeoplefourComponent},
  {path: 'people/5', component: PeoplefiveComponent},
  {path: 'people/6', component: PeoplesixComponent},
  {path: 'people/7', component: PeoplesevenComponent},
  {path: 'people/8', component: PeopleeightComponent},
  {path: 'people/9', component: PeoplenineComponent},
  {path: 'people/10', component: PeopletenComponent},
  {path: 'people/11', component: PeopleelevenComponent},
  {path: 'people/12', component: PeopletwelveComponent},
  {path: 'people/13', component: PeoplethirteenComponent},
  {path: 'people/14', component: PeoplefourteenComponent},
  {path: 'people/15', component: PeoplefifteenComponent},
  {path: 'people/16', component: PeoplesixteenComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    ResearchComponent,
    PublicationComponent,
    PeopleComponent,
    ContactComponent,
    PhotosComponent,
    CarouselComponent,
    PeopleoneComponent,
    PeopletwoComponent,
    PeoplethreeComponent,
    PeoplefourComponent,
    PeoplefiveComponent,
    PeoplesixComponent,
    PeoplesevenComponent,
    PeopleeightComponent,
    PeoplenineComponent,
    PeopletenComponent,
    PeopleelevenComponent,
    PeopletwelveComponent,
    PeoplethirteenComponent,
    PeoplefourteenComponent,
    PeoplefifteenComponent,
    PeoplesixteenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
