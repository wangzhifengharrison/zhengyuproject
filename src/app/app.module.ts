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


const routeConfig: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'publication', component: PublicationComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'photos', component: PhotosComponent}

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
    CarouselComponent
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
