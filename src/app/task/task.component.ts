import { Component, OnInit } from '@angular/core';
import { FilteredTasks, UrgencyMap} from '../models/task.interface';
import { TaskService } from './task.service';
import {AppService} from "../app.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[];
  isLoaded: Boolean = false;
  isCompletedVisible: Boolean = false;
  urgencyMap: any[] = UrgencyMap;

  filteredTasks: FilteredTasks = {
    completed : [],
    uncompleted: []
  };

  constructor (
    private taskService: TaskService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.getTasks();
    this.getTaskFilter();

    /*  Пример вызова Observable напрямую из сервиса похоже на Promise
     this.taskService.getAllTasks()
     .subscribe(values => {
     // do something with values
     },
     error => console.log(error))
     */
  }
  getTaskFilter() {
    this.taskService.getFilteredTasks()
        .subscribe(values => {
          this.filteredTasks = values;
          this.isLoaded = true;
          console.log(this.filteredTasks);
        },
        error => console.log(error));
  }

  getTasks() {
    this.appService.getAllTasks()
        .then(tasks => this.tasks = tasks);
  }

  toggleCompleted() {
    this.isCompletedVisible = !this.isCompletedVisible;
  }

}
