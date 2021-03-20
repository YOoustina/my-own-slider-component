import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentSliderComponent } from './ng-content-slider.component';

describe('NgContentSliderComponent', () => {
  let component: NgContentSliderComponent;
  let fixture: ComponentFixture<NgContentSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
