import {  AfterViewInit, Component,  Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-slider',
  exportAs:'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit ,AfterViewInit{
 @Input() items=[]; 

  currentSlide = 0;
  selectedItems = {};
  indicator:number;
  backImg="";
  constructor() {}

  ngOnInit(): void {  
}

ngAfterViewInit() {
  console.log(this.items);
  
   }

  next() {
    if (this.currentSlide + 1 === this.items.length) return;
    this.currentSlide = (this.currentSlide + 1) % this.items.length; 
  }

  prev() {
    if (this.currentSlide === 0) return;
    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
  }
   
 
}
