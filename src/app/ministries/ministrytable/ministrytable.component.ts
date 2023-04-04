import { Component, OnInit } from '@angular/core';
import { MinistryService } from '../../services/ministry.service';
import {IMinistry} from '../../interfaces/iministry.Ministry';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-ministrytable',
  templateUrl: './ministrytable.component.html',
  styleUrls: ['./ministrytable.component.scss']
})
export class MinistrytableComponent implements OnInit {

  ministries! : MatTableDataSource<IMinistry> 
  displayedColumns = ['id','office','address','faks','emel','tels','actions']

  constructor(private ministryService: MinistryService){

  }

  ngOnInit(): void {

    this.ministryService.getMinistryInfo().subscribe((ministries) => {

      console.log(ministries);
      
      this.ministries = new MatTableDataSource<IMinistry>(ministries)
      
      
    })
      
  }

  deleteMinistries(event: number){
    console.log('from parent',event)
  }



}
