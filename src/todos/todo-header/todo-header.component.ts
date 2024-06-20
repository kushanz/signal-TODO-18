import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-header.component.html',
  styleUrl: './todo-header.component.css'
})
export class TodoHeaderComponent {
  todoService = inject(TodoService)
  text:string = ""

  changeText(event: Event) {
    const target = event.target as HTMLInputElement
    this.text = target.value
  }
  addTodo() {
    this.todoService.addTodo(this.text)
    this.text = ''
  }
}
