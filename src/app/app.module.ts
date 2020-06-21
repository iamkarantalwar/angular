import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './core/components/todo/todo.component';
import { TodoListComponent } from './core/components/todo/todo-list/todo-list.component';
import { TodoItemComponent } from './core/components/todo/todo-list/todo-item/todo-item.component';
import { HeaderComponent } from './core/header/header.component';
import { TodoFormComponent } from './core/components/todo/todo-list/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
