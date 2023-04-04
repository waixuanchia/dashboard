import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MinistrytableComponent } from './ministrytable/ministrytable.component';
import { MinistryComponent } from './ministry/ministry.component';
import { MinistrymapComponent } from './ministrymap/ministrymap.component';
import { MinistryformComponent } from './ministryform/ministryform.component';



@NgModule({
  declarations: [
    MinistrytableComponent,
    MinistryComponent,
    MinistrymapComponent,
    MinistryformComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    MinistrytableComponent,
    MinistryComponent,
    MinistrymapComponent,
    MinistryformComponent,
    
  ]
})
export class MinistriesModule { }
