import { MaterialModule } from './../app/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApparelListComponent } from './apparel-list/apparel-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateApparelsComponent } from './create-apparels/create-apparels.component';
import { AddMeshesComponent } from './add-meshes/add-meshes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ApparelListComponent
  }
]

@NgModule({
  declarations: [
    ApparelListComponent,
    CreateApparelsComponent,
    AddMeshesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ApparelsModule { }
