import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uri='http://localhost:3000/order';

  constructor(private http:HttpClient) { }

  getOrder(){
    return this.http.get(`${this.uri}/view`);
  }

  postOrder(){
    return this.http.post(`${this.uri}/make`,{});
  }
  
}
