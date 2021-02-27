import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = "http://localhost:8080/lives"

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  //Observable ready to work with a async datas and it is from native angular
  public getLivesWithFlag(flag: string) : Observable<ResponsePageable>
  {
    return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag)
  }
}
