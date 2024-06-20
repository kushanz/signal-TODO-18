import { Injectable, signal } from '@angular/core';
import { TodoInterface } from '../types/todo.interface';
import { FilterEnum } from '../types/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoSig = signal<TodoInterface[]>([])
  filterSig = signal<FilterEnum>(FilterEnum.all)

  addTodo(text:string) {
    const newTodo:TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16)
    }
    this.todoSig.update((todos) => [...todos, newTodo])
  }
  changeFilter(filterName:FilterEnum) {
    this.filterSig.set(filterName)
  }

  constructor() { }
}
