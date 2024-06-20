import { Component, computed, inject } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { CommonModule } from '@angular/common';
import { FilterEnum } from '../../types/filter.enum';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent {

  todoService = inject(TodoService)
  filterSig = this.todoService.filterSig
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todoService.todoSig().filter((todo) => !todo.isCompleted).length
  })
  noTodoClass = computed(() => {
    return this.todoService.todoSig().length === 0
  })

  changeFilter(event: Event,filterName: FilterEnum) {
    event.preventDefault()
    this.todoService.changeFilter(filterName)
    console.log(this.todoService.filterSig())
  }
}
