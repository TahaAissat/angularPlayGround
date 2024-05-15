import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url : string = 'http://localhost:3000/orders'
  constructor(private http:HttpClient) { }

  public getDatas () : Observable<Order[]> {
    return this.http.get<Order[]>(this.url)
  }
  public getDatasByID (id : any) : Observable<Order[]> {
    return this.http.get<Order[]>(this.url+'/'+id)
  }
  public updateDatasByID (id:any , data:Observable<Order[]>) : Observable<Order[]> {
    return this.http.put<Order[]>(this.url + '/' + id , data)
  }
  public addDatas (data:Observable<Order[]>) : Observable<Order[]>{
    return this.http.post<Order[]>(this.url + '/', data )
  }
}
