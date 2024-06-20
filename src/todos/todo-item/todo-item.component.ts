import { Component, inject, input } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  todoService = inject(TodoService)

  todoItem = input<TodoInterface>()

  removeTodo() {
    let id:any = this.todoItem()?.id || -1
    this.todoService.removeTodo(id)
  }
}
