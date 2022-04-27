import { MatListModule } from '@angular/material/list';
import { MaterialModule } from './../app/material/material.module';
import { NgModule, Component,OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {
		path: '', component: AuthComponent,
    children:[
      {
        path: 'apparels',
        loadChildren: () => import('../apparels/apparels.module').then(m => m.ApparelsModule)
      },
      {
          path: 'design',
          loadChildren: () => import('../designs/designs.module').then(m => m.DesignsModule)
        },
    ]
  },
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
  ]
})
export class AuthModule { }
