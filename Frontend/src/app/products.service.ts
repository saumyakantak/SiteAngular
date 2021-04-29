import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product} from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri='http://localhost:3000/feed';

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<Product>{
    return this.http.get<Product>(`${this.uri}/posts`); // return an observable
  }
  addProduct(title, price, imageUrl, description){
    const data={
      title:title,
      price:price,
      description:description,
      imageUrl:imageUrl
    }
    return this.http.post(`${this.uri}/post`, data); // return an observable
  }
  viewProduct(id){
    return this.http.get(`${this.uri}/post/${id}`);
  }
}

