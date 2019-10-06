import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  addItems(item) {
    return this.http.post('http://localhost:8080/item/addItem', { item: item });
  }
getItems(){
  return this.http.get('http://localhost:8080/item/getItem');
}
Delete(id){
  return this.http.post('http://localhost:8080/item/delete', { id: id });
}

  constructor(public http: HttpClient) { }
}
