import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule,} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MybookingComponent } from './components/mybooking/mybooking.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MobileserviceComponent } from './mobileservice/mobileservice.component';
import { TouchserviceComponent } from './touchservice/touchservice.component';
import { WecareserviceComponent } from './wecareservice/wecareservice.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  
    DashboardComponent,
    MybookingComponent,
    LogoutComponent,
    MobileserviceComponent,
    TouchserviceComponent,
    WecareserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
    
    ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
