import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserReportComponent } from './user-report/user-report.component';
import { ReportComponent } from './report/report.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    UserReportComponent,
    ReportComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatGridListModule
  ],
  exports:[
    UserReportComponent,
    ReportComponent,
    CardComponent,
  ]

})
export class ReportModule { }
