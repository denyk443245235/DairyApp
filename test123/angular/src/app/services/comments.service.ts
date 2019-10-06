import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  AddComment(item, message) {

    let user = localStorage.getItem('name');
    return this.http.post('http://localhost:8080/comment/addComment', { message: message, item: item });
  }
  getComments(item){

return this.http.post('http://localhost:8080/comment/getCommments',{item:item});
  }
  constructor(public http: HttpClient) { }
}
