import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }
  getToDo() {
    return this.http.get('https://5ec7e269155c130016a90698.mockapi.io/toDo/ToDoSearch');
}
}
