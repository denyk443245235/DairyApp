import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})



export class AuthService {
  
  login(login, password) {
    return this.http.post('http://localhost:8080/auth/login', { login: login, password: password });
  }
  regiter(login, password) {
    return this.http.post('http://localhost:8080/auth/register', { login: login, password: password });
  }
  constructor(public http: HttpClient) { }
}
