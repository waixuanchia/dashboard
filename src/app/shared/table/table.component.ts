import { Component, Input, OnInit, OnChanges, AfterViewInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import {MatTable,MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {PaginatorComponent} from '../paginator/paginator.component';
import {IMinistry} from '../../interfaces/iministry.Ministry';
import {Iuser} from '../../interfaces/iuser.user';
import { ActivatedRoute, Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})


export class TableComponent<T> implements OnInit, OnChanges, AfterViewInit,AfterContentInit {


  @Input() data  !: MatTableDataSource<T>
  @Input() displayedColumns !: Array<string>
  @Input() action_table !: boolean
  @Output() ondelete : EventEmitter<number> = new EventEmitter<number>()
  //@Output() onview : EventEmitter<number> = new EventEmitter<number>()
  @Output() onAccept : EventEmitter<number> = new EventEmitter<number>()
  

  constructor(private route: ActivatedRoute,private router : Router){
    
  }

  ngOnChanges(){
    
  }
  
  ngOnInit(): void {

  }

  ngAfterContentInit(): void {
    
    
  }

  ngAfterViewInit(): void {
      
  }

  editOperation(id : number){

    this.router.navigate([`./ministries/${id}`]);
    

  }

  deleteOperation(id : number){

    this.ondelete.emit(id)

  }

  acceptOperation(id : number){

    this.onAccept.emit(id);

  }

  viewOperation(id: number){

  }

}
