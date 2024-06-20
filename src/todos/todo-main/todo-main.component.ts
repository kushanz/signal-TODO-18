import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todo-main',
  standalone: true,
  imports: [],
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
