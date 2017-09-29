import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { AppService } from '../../app.service';
import {Task, UrgencyMap} from '../../models/task.interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task;
  _id: number;
  isLoaded: Boolean = false;
  urgencyList: object[] = UrgencyMap;
  @ViewChild('taskForm') toForm: NgForm;
  constructor(
      private route: ActivatedRoute,
      private appService: AppService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this._id = params['id'];
          console.log(params);
        }
    );
    this.getTask();
    this.isLoaded = true;
  }

  getTask() {
    this.task = this.appService.getTaskById(this._id);
    console.log(this.task);
  }
  createEmptyTask(): Task {
    return {id: -1, name: '', description: '', status: false, urgency: 0, finishTo: new Date('1/12/18'), finishToStr: '2017-22-22'};
  }
  createTask() {
    console.log(this.task);
    console.log(this.toForm);
  }
}
