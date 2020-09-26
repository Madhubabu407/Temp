import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Account/login/login.component';
import { PagesComponent } from '../app/Pages/Pages.component';
import { DashboardComponent } from '../app/Pages/dashboard/dashboard.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { ManageProgramsComponent } from './Pages/manage-programs/manage-programs.component';
import { AddNewProgramComponent } from './Pages/manage-programs/add-new-program/add-new-program.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    DashboardComponent,
    NavbarComponent,
    ManageProgramsComponent,
    AddNewProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
