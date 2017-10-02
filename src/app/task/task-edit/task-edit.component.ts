import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppService } from '../../app.service';
import { Task, UrgencyMap } from '../../models/task.interface';
import { Location } from '@angular/common';
import {NgForm} from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  task: Task;
  isLoaded: Boolean = false;
  urgencyList: object[] = UrgencyMap;
  @ViewChild('taskForm') toForm: NgForm;
  constructor(
      private route: ActivatedRoute,
      private appService: AppService,
      private location: Location
  ) { }

  ngOnInit() {
    console.log(this.urgencyList);
    this.getTaskId();
    // this.route.params.subscribe(
    //     (params: Params) => {
    //       this._id = params['id'];
    //       console.log(params);
    //     }
    // );
    // this.getTask();
  }
  getTaskId() {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.appService.getTaskById(+params.get('id')))
        .subscribe(task => this.task = task);
    this.isLoaded = true;
    console.log(this.task);
  }
  // getTask() {
  //   this.task = this.appService.getTaskById(this._id);
  //   console.log(this.task);
  // }
  createEmptyTask(): Task {
    return {id: -1, name: '', description: '', status: false, urgency: 0, finishTo: new Date('1/12/18'), finishToStr: '2017-22-22'};
  }
  createTask() {
    console.log(this.task);
    console.log(this.toForm);
  }
  save(): void {
    this.appService.update(this.task)
        .then(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
