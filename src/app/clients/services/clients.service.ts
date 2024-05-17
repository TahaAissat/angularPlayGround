import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private link: string = 'http://localhost:3000/clients/';

  constructor(private http: HttpClient) {}

  public getDatas(): Observable<Client[]> {
    return this.http.get<Client[]>(this.link);
  }
  public getDatasById(id: any): Observable<Client> {
    return this.http.get<Client>(this.link + id);
  }
  public updateDatasById(id: any, data: Client): Observable<Client> {
    return this.http.put<Client>(this.link + id, data);
  }
  public addDatas(data: Client): Observable<Client> {
    return this.http.post<Client>(this.link, data);
  }
  public deleteDatas(id:any) : Observable<Client> {
    return this.http.delete<Client>(this.link+id)
  }
}
