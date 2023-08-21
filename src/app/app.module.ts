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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroHomeComponent,
    AboutComponent,
    BenefitHomeComponent,
    ServiceHomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
