import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IMinistry} from '../interfaces/iministry.Ministry';
import {Observable,tap,map} from 'rxjs'



@Injectable({
  providedIn: 'root'
})


export class MinistryService {

  constructor(private http:HttpClient) { }

  getMinistryInfo() : Observable<IMinistry[]> {
    return this.http.get<IMinistry[]>('https://mykasihapp.onrender.com/api/ministries/').pipe(map((data : IMinistry[]) => {
      return data.map((ministry:IMinistry) => {
        return {...ministry,region_type:ministry.region.types}
      })
    }))
  }

  


}
