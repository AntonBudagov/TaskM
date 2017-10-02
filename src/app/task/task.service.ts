import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { FilteredTasks } from '../models/task.interface';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private tasks: Task[];
  private filteredTasks: FilteredTasks;

  constructor(
    private appService: AppService
  ) { }

  private filterCompletedTasks(allItems): Task[] {
    return allItems.filter(item => {
      return item.status === true;
    });
  }

  private filterUncompletedTasks(allItems): Task[] {
    return allItems.filter(item => {
      return item.status === false;
    });
  }

  private satData(values): void {
    this.tasks = values;
    this.filteredTasks = {
      completed : this.filterCompletedTasks(values),
      uncompleted: this.filterUncompletedTasks(values)
    };
  }

  getFilteredTasks(): Observable<FilteredTasks> {
    return new Observable(observer => {
      this.appService.getAllTasks().then(values => {
          this.satData(values);
          observer.next(this.filteredTasks);
          observer.complete();
        },
        error => console.log(error));
    });
  }

}
