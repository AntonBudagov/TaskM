import { Component, OnInit } from '@angular/core';
import { FilteredTasks, UrgencyMap} from '../models/task.interface';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isLoaded: Boolean = false;
  isCompletedVisible: Boolean = false;
  urgencyMap: Object[] = UrgencyMap;
  filteredTasks: FilteredTasks = {
    completed : [],
    uncompleted: []
  };

  constructor (
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTask();

    /*  Пример вызова Observable напрямую из сервиса похоже на Promise
     this.taskService.getAllTasks()
     .subscribe(values => {
     // do something with values
     },
     error => console.log(error))
     */
  }
  getTask() {
    this.taskService.getFilteredTasks().subscribe(values => {
          this.filteredTasks = values;
          this.isLoaded = true;
          console.log(this.filteredTasks);
        },
        error => console.log(error));
  }

  toggleCompleted() {
    this.isCompletedVisible = !this.isCompletedVisible;
  }

}
