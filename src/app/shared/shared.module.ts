import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    HeaderNavigationComponent,
    FooterBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    NguCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    NgsRevealModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    LayoutModule,
    ScrollToModule.forRoot()
  ],
  exports: [
    HeaderNavigationComponent,
    FooterBarComponent,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    NguCarouselModule,
    MatFormFieldModule,
    MatInputModule,
    NgsRevealModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    LayoutModule
  ]
})
export class SharedModule { }
