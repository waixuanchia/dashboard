import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() formControl !: FormControl
  @Input() label !: string
  
  ngOnInit(){
    console.log(this.formControl);
  }

  textChange(){
    console.log(this.formControl)
  }



  

}
