import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
     <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
     <h3>{{currentFocus}}</h3>
     <ul>
      <li  *ngFor="let currentTask of tasks"><input type="checkbox" (click)="isDone(currentTask)"><span [class]="priorityColor(currentTask)" (click)="editList(currentTask)">{{currentTask.description}}</span></li>
    </ul>
    <br><hr><br>
    <div *ngIf="selectedTask">
      <h3>{{selectedTask.description}}</h3>
      <p>Task complete? {{selectedTask.done}}</p>
      <h3>Edit task</h3>
      <label>Enter Task description</label>
      <input type="text" [(ngModel)]="selectedTask.description">
      <br>
      <label>Enter Task priority</label>
      <input type="radio"  [(ngModel)]="selectedTask.priority" [value]="1">High Priority
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">Medium Priority
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">Low Priority
      <button (click)="finishedEditing()">Done</button>
    </div>
   </div>
  `
})
export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 1),
    new Task('Begin brainstorming possible JavaScript group projects',  2),
    new Task('Add README file to last few Angular repos on GitHub', 3)
  ];
  selectedTask:Task;
  editList(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
  isDone(clickedTask: Task){
    if(clickedTask.done){
      clickedTask.done = false;
    }else{
      clickedTask.done = true;
    }
  }
  priorityColor(task:Task){
    if(task.priority == 1){
      return 'bg-danger';
    }else if(task.priority == 2){
      return 'bg-warning';
    }else{
      return 'bg-info';
    }
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
