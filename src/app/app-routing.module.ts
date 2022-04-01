import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MybookingComponent } from './components/mybooking/mybooking.component';

const routes: Routes = [
  {
    path:'Dashboard', component: DashboardComponent },  
    {path:'Mybooking', component : MybookingComponent },
    {path:'logout',    component: LogoutComponent },
    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
