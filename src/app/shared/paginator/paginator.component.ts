import { Component, Input, OnInit, OnChanges, AfterViewInit, ViewChild } from '@angular/core';
import {MatTable,MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {IMinistry} from '../../interfaces/iministry.Ministry';
import {Iuser} from '../../interfaces/iuser.user';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent<T> implements OnInit, OnChanges, AfterViewInit {

  @Input() dataSource ?: MatTableDataSource<T>
  @ViewChild(MatPaginator) paginator !: MatPaginator
  
  ngOnChanges(){
    if(this.dataSource !== undefined){
      

      this.dataSource.paginator = this.paginator
    
    }
    
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }
  

}
