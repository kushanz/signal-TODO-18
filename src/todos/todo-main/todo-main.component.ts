import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todo-main.component.html',
  styleUrl: './todo-main.component.css'
})
export class TodoMainComponent {

  todoService = inject(TodoService)
  visibleTodos = computed(() => {
    const todos = this.todoService.todoSig()
    const filter = this.todoService.filterSig()

    if(filter === FilterEnum.active) {
      return todos.filter((todo) => !todo.isCompleted)
    } else if(filter === FilterEnum.completed) {
      return todos.filter((todo) => todo.isCompleted)
    }
    return todos
  })
}
