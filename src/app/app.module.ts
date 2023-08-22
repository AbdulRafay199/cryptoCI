import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { AboutComponent } from './pages/about/about.component';
import { BenefitHomeComponent } from './components/benefit-home/benefit-home.component';
import { ServiceHomeComponent } from './components/service-home/service-home.component';
import { CardComponent } from './subcomponents/card/card.component';
import { RoadmapHomeComponent } from './components/roadmap-home/roadmap-home.component';
import { MeetAboutComponent } from './components/meet-about/meet-about.component';
import { TeamAboutComponent } from './components/team-about/team-about.component';
import { TeamcardComponent } from './subcomponents/teamcard/teamcard.component';
import { HeroAboutComponent } from './components/hero-about/hero-about.component';
import { HeroBlogComponent } from './components/hero-blog/hero-blog.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BloglistComponent } from './components/bloglist/bloglist.component';
import { BlogcardComponent } from './subcomponents/blogcard/blogcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroHomeComponent,
    AboutComponent,
    BenefitHomeComponent,
    ServiceHomeComponent,
    CardComponent,
    RoadmapHomeComponent,
    MeetAboutComponent,
    TeamAboutComponent,
    TeamcardComponent,
    HeroAboutComponent,
    HeroBlogComponent,
    BlogComponent,
    BloglistComponent,
    BlogcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
