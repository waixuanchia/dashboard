import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {GoogleMapsModule} from '@angular/google-maps';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { TableComponent } from './table/table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MapComponent } from './map/map.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';





@NgModule({
  declarations: [
    NavbarComponent,
    SidenavWrapperComponent,
    TableComponent,
    PaginatorComponent,
    MapComponent,
    FormComponent,
    InputComponent,
    CardComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    NavbarComponent,
    SidenavWrapperComponent,
    TableComponent,
    MapComponent,
    FormComponent,
    InputComponent
    
    
  ]
})
export class SharedModule { }
