import { Component } from '@angular/core';
import { TodoHeaderComponent } from '../todo-header/todo-header.component';
import { TodoMainComponent } from '../todo-main/todo-main.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';

@Component({
  selector: 'app-todoapp',
  standalone: true,
  imports: [TodoHeaderComponent,TodoMainComponent,TodoFooterComponent],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {

}
