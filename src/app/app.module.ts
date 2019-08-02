import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FeatureComponent } from './components/feature/feature.component';
import { WorksComponent } from './components/works/works.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingsComponent } from './components/pricings/pricings.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';
import { ScrollingComponent } from './layouts/scrolling/scrolling.component';
import { SlidingComponent } from './layouts/sliding/sliding.component';
import { HomeScreenComponent } from './layouts/home-screen/home-screen.component';
import { SideComponent } from './layouts/side/side.component';
import { NguiMapModule } from '@ngui/map';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeatureComponent,
    WorksComponent,
    ServicesComponent,
    TestimonialsComponent,
    PricingsComponent,
    ContactComponent,
    ScrollingComponent,
    SlidingComponent,
    HomeScreenComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NguiMapModule.forRoot({
      apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCbMGRUwcqKjlYX4h4-P6t-xcDryRYLmCM' +
        '&libraries=visualization,places,drawing'
    }),
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
