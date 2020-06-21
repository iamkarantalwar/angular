import { TodoServiceInterface } from './todo.service.interface';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TodoService implements TodoServiceInterface{

    constructor(private http: HttpClient) {}

    private endPoint = 'todos';

    getTodoById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${environment.baseUrl}/${this.endPoint}?id=${id}`);
    }
    postTodo(): Observable<Todo> {
        throw new Error('Method not implemented.');
    }
    updateTodo(): Observable<Todo> {
        throw new Error('Method not implemented');
    }
    deleteTodo(): Observable<Todo> {
        throw new Error('Method not implemented.');
    }
    getTodos(): Observable<Todo[]> {
      return this.http.get<Todo[]>(`${environment.baseUrl}/${this.endPoint}`);
    }

}
