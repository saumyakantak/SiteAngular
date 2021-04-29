import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri='http://localhost:3000';

  constructor(private http:HttpClient) { }

  Login(email, password){
    const user={
      email:email,
      password:password
    }
    return this.http.post(`${this.uri}/auth/login`,user);
  }
  Signup(name, email, password){
    const user={
      name:name,
      email:email,
      password:password
    }
    return this.http.put(`${this.uri}/auth/signup`,user);
  }
}
