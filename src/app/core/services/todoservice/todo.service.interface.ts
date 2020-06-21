import {Todo} from '../../../shared/models/todo.model';
import { Observable } from 'rxjs';

export interface TodoServiceInterface {
    getTodos(): Observable<Todo[]>;
    getTodoById(id: number): Observable<Todo>;
    postTodo(): Observable<Todo>;
    updateTodo(): Observable<Todo>;
    deleteTodo(): Observable<Todo>;
}

