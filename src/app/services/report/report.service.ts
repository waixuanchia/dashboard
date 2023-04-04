import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ireport } from 'src/app/interfaces/ireport.report';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private httpClient: HttpClient) { 

  }

  getReports():Observable<Ireport[]>{

    return this.httpClient.get<Ireport[]>('https://mykasihapp.onrender.com/api/reports/')

  }

  getReport():Observable<Ireport>{

    return this.httpClient.get<Ireport>('https://mykasihapp.onrender.com/api/reports/')

  }

  acceptReport(id: number):Observable<any>{
    return this.httpClient.patch<any>(`https://mykasihapp.onrender.com/reports/${id}/`,{
      id,
      status:'accepted'
    });
  }
}
