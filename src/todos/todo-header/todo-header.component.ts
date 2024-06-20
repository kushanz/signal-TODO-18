import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-header.component.html',
  styleUrl: './todo-header.component.css'
})
export class TodoHeaderComponent {
  text:string = ""

  changeText(event: Event) {

  }
  addTodo() {
    
  }
}
