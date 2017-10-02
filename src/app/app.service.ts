import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import { Observable } from "rxjs";
import { Urgency, Task } from './models/task.interface';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AppService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private tasks: Task[];
  private tasksUrl = 'api/tasks'; // URL to web api
  constructor(private http: Http) { }
  getAllTasks (): Promise<Task[]> {
    return this.http.get(this.tasksUrl)
        .toPromise()
        .then(response => response.json().data as Task[])
        .catch(this.handleError);
  }
  getTaskById(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Task)
        .catch(this.handleError);
  }
  getAllTasks2 (): Observable<Task[]> {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.tasks);
        observer.complete();
      }, 400);
    });
  }
  // getTask(id: number): Promise<Task> {
  //   return this.getAllTasks().then((tasks => tasks.find(task => task.id === id));
  // }
  // getTaskById (id: number): Task {
  //   return this.items.filter(item => {
  //     return item.id == id})[0];
  // }
  update(task: Task): Promise<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http
        .put(url, JSON.stringify(task), {headers: this.headers})
        .toPromise()
        .then(() => task)
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
