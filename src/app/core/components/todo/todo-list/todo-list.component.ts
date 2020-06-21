import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todoservice/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private toDoService: TodoService) { }

  todos: Todo[];

  ngOnInit(): void {
    this.toDoService.getTodos()
    .subscribe((res) => this.todos = res);
  }
}
