import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,map} from 'rxjs';
import {Iuser} from '../../interfaces/iuser.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getUserInfo() : Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>('https://mykasihapp.onrender.com/api/users/').pipe(map((data : Iuser[]) => {
      return data.map((user:Iuser) => {
        console.log(user);
        return {...user}
      })
    }))
  }
}
