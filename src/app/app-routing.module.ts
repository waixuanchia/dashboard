import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesModule} from './routes/routes.module';
import {DashboardComponent} from './routes/dashboard/dashboard.component';
import {LoginComponent} from './routes/login/login.component';
import {UserReportComponent} from './report/user-report/user-report.component';
import {ReportComponent} from './report/report/report.component';
import {MinistryComponent} from './ministries/ministry/ministry.component';
import {UserComponent} from './users/user/user.component';
import {MinistryformComponent} from './ministries/ministryform/ministryform.component';
import {CardComponent} from './report/card/card.component';


const routes: Routes = [
  { path:'', component: DashboardComponent, children:[
    { path:'reports', component:ReportComponent },
    { path:'reports/:id', component:CardComponent },
    { path:'ministries', component: MinistryComponent },
    { path: 'ministries/:id',component:MinistryformComponent },
    { path:'users', component:UserComponent }
    
    
    
  ] },
  { path:'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RoutesModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
