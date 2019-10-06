import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('name')}`
      }
    });
    return next.handle(tokenizedReq);
  }
}
