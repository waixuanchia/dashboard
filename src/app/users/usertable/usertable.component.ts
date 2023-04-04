import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserService} from '../../services/users/user.service';
import {Iuser} from '../../interfaces/iuser.user';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})
export class UsertableComponent implements OnInit {

  users ! : MatTableDataSource<Iuser> 
  displayedColumns = ['id','first_name','last_name','username','email','actions']

  constructor(private userService: UserService){

  }

  ngOnInit(): void {

    this.userService.getUserInfo().subscribe((users) => {
      
      console.log(users);
      this.users = new MatTableDataSource<Iuser>(users)
      
      
    })
      
  }

  deleteUser(event : number){

    console.log(event);

  }



}
