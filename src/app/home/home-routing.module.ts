import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home-page',
    component: HomePageComponent
  },
  {
    path: '',
    redirectTo: '/home/home-page',
    pathMatch: 'full'
  },
  // {
  //   path: '**', component: HomePageComponent
  // }

  // {
  //   path: '**',
  //   redirectTo: '/home/home-page',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
