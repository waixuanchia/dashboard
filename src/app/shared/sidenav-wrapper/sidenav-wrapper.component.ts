import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


import {INavLink} from 'src/app/interfaces/inav-link.Navlink';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.scss']
})
export class SidenavWrapperComponent implements OnInit {

  NavLinks !: INavLink[]
  opened !: boolean

  constructor(private route:ActivatedRoute){

  }

  ngOnInit(): void {

    this.NavLinks = [
      { href: "/", text:"Dashboard", isActive:false },
      { href: "/reports", text:"Reports",  isActive:false },
      { href: "/appointments", text:"Appointments" , isActive:false },
      { href: "/ministries", text:"Ministries" , isActive:false },
      { href: "/users", text:"Users" , isActive:false },
    ]    
    
  }

  

}
