import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() todo: Todo;

  btnClass() {
    return {
      btn: true,
      'bg-primary': this.todo.completed ? true : false,
      'bg-warning': ! this.todo.completed ? false : true
    };
  }

  ngOnInit(): void {
  }

}
