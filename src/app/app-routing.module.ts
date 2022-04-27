import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => import('../login/login.module').then(m =>m.LoginModule)
  },
  {
		path: '',
    loadChildren: () => import('../auth/auth.module').then(m =>m.AuthModule)
	},
  // {
  //   path: 'apparels',
  //   loadChildren: () => import('../apparels/apparels.module').then(m => m.ApparelsModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

