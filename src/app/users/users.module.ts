import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UsertableComponent } from './usertable/usertable.component';



@NgModule({
  declarations: [
    UserComponent,
    UsertableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    UserComponent,
    UsertableComponent
  ]
})
export class UsersModule { }
