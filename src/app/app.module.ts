import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { MyCarouselComponent } from './my-carousel/my-carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselComponent, CarouselItemElement } from './carousel.component';
import { SliderComponent } from './slider/slider.component';
import { NgContentSliderComponent } from './ng-content-slider/ng-content-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselItemDirective,
    CarouselComponent,
    CarouselItemElement,
    SliderComponent,
    NgContentSliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
