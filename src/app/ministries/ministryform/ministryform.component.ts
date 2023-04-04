import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ministryform',
  templateUrl: './ministryform.component.html',
  styleUrls: ['./ministryform.component.scss']
})
export class MinistryformComponent implements OnInit {

  ministryForm = new FormGroup({
    office_name: new FormControl('',[Validators.required,Validators.minLength(120),Validators.maxLength(250)]),
    address:new FormControl('',[Validators.required,Validators.minLength(120)]),
    faks: new FormControl('',[Validators.required,Validators.minLength(25), Validators.maxLength(50)]),
    tels: new FormControl('',[Validators.required,Validators.minLength(25),Validators.maxLength(50)]),
    emel: new FormControl('',[Validators.required,Validators.minLength(25),Validators.maxLength(50)])
  })

  office_name !: FormControl
  address !: FormControl
  faks !: FormControl
  tels !: FormControl
  emel !: FormControl

  constructor(private router: Router){

  }


  ngOnInit(): void {

    console.log(this.ministryForm)
    this.office_name = this.ministryForm.controls.office_name;
    this.address = this.ministryForm.controls.address;
    this.faks = this.ministryForm.controls.faks;
    this.tels = this.ministryForm.controls.tels;
    this.emel = this.ministryForm.controls.emel;

      
  }

  submitOperation(){
    
  }

  cancelOperation(){

    this.router.navigate(['ministries'])

  }


}
