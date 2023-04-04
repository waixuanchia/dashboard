import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Ireport } from 'src/app/interfaces/ireport.report';
import { ReportService } from 'src/app/services/report/report.service';

interface IReportTable{
  id:string,
  user_id:string,
  user:string;
  ministry:string;
  ministry_id:number,
  image_url:string,
  description:string
}

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})


export class UserReportComponent implements OnInit {

  report!: MatTableDataSource<IReportTable>
  displayedColumns = ['id','user_id','ministry_id','user','ministry','description','status','actions']
  action_table = true

  constructor(private reportService:ReportService, private cd:ChangeDetectorRef){

  }

  ngOnInit(): void {

    this.reportService.getReports().subscribe((reports: Ireport[]) => {
      const report_data = reports.map((report) => {
        return {
          id:report.id,
          user_id:report.user.id,
          user:report.user.email,
          ministry:report.ministry.office,
          ministry_id:report.ministry.id,
          image_url:report.image_url,
          description:report.description,
          status:report.status.status
        }
      })
      this.report = new MatTableDataSource<IReportTable>(report_data)
    })
      
  }

  accept_report(id: number){

    this.reportService.acceptReport(id).subscribe()
    this.reportService.getReports().subscribe((data : Ireport[]) =>{
      const report_data = data.map((report) => {
        return {
          id:report.id,
          user_id:report.user.id,
          user:report.user.email,
          ministry:report.ministry.office,
          ministry_id:report.ministry.id,
          image_url:report.image_url,
          description:report.description,
          status:report.status.status
        }
      })
      this.report = new MatTableDataSource<IReportTable>(report_data)
      this.cd.detectChanges();
    })
  }

}
