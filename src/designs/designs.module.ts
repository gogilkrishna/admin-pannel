import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignsComponent } from './designs/designs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DesignsComponent
  }
]


@NgModule({
  declarations: [
    DesignsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DesignsModule { }
