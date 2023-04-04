import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ReportModule} from '../report/report.module';
import {MinistriesModule} from '../ministries/ministries.module';
import {UsersModule} from '../users/users.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportModule,
    MinistriesModule,
    RouterModule
  ],
  exports:[
    DashboardComponent,
    LoginComponent
    
  ]
})
export class RoutesModule { }
