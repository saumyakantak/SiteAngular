import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  uri='http://localhost:3000/cart';

  constructor(private http:HttpClient) { }

  getCart(){
    return this.http.get(`${this.uri}/posts`);
  }

  postCart(id){
    const product={
      productId:id
    }
    return this.http.post(`${this.uri}/add`,product);
  }

  deleteCart(id){
    const product={
      productId:id
    }
    return this.http.put(`${this.uri}/delete-item`,product);
  }
}
