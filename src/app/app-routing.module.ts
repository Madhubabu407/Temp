import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { PagesComponent } from '../app/Pages/Pages.component';
import { DashboardComponent } from '../app/Pages/dashboard/dashboard.component';
import { ManageProgramsComponent } from './Pages/manage-programs/manage-programs.component';
import { AddNewProgramComponent } from './Pages/manage-programs/add-new-program/add-new-program.component';

const routes: Routes = [ {
  path: '',
  redirectTo: '/Login',
  pathMatch: 'full'
},
{
  path: 'Login',
  component: LoginComponent,
},
{
  path: 'pages',
  component: PagesComponent,
  children: [
      { path: '', redirectTo: '/ManagePrograms', pathMatch: 'full' },
      {
          path: 'Dashboard',
          component: DashboardComponent
      },
      {
        path: 'ManagePrograms',
        component: ManageProgramsComponent
      }, 
      {
        path: 'AddNewPrograms',
        component: AddNewProgramComponent
      }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
