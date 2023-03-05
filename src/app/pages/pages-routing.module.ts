import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CrudComponent } from './crud/crud.component';

const routes: Routes = [
  {
    path: 'init',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'crud',
        component: CrudComponent
      },
      {
        path: '**',
        redirectTo: '/init/home',
        pathMatch: 'full',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }