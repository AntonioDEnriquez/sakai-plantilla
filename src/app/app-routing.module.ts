import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'pages',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), PagesRoutingModule],
    exports: [RouterModule],
})
export class AppRoutingModule { }