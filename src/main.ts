import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoappComponent } from './todos/todoapp/todoapp.component';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoappComponent],
  template: `
    <app-todoapp />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
