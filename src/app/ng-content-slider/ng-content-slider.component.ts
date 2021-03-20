import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { CarouselItemDirective } from './../carousel-item.directive';

@Component({
  selector: 'app-ng-content-slider',
  templateUrl: './ng-content-slider.component.html',
  styleUrls: ['./ng-content-slider.component.scss'],
})
export class NgContentSliderComponent implements OnInit, AfterViewInit {
  @ContentChildren(CarouselItemDirective)
  items: QueryList<CarouselItemDirective>;

  currentSlider = 0;
  selectedItems = {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(){

 }

  nextSlide() {
    if (this.currentSlider + 1 === this.items.length) return;
    this.currentSlider = (this.currentSlider + 1) % this.items.length;
  }

  prevSlide() {
    if (this.currentSlider === 0) return;
    this.currentSlider =
      (this.currentSlider - 1 + this.items.length) % this.items.length;
  }
}
