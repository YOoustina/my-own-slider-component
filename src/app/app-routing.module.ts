import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SliderComponent } from './slider/slider.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/slider', pathMatch: 'full' },
  { path: 'slider', component: SliderComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
