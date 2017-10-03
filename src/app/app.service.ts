import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Urgency, Task } from './models/task.interface';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

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
  getAllTasks2(): Observable<Task[]> {
    return this.http
        .get(this.tasksUrl)
        .map(response => response.json().data as Task[]);
  }
  // private desk: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  // private items: [any] = [
  //   {id: 100, name: 'Купить продуктов', description: this.desk, status: true, urgency: Urgency.Hi, finishTo: new Date('1/1/16') },
  //   {id: 101, name: 'Сходить в спорзал', description: 'Небыл уже неделю, давно полра', status: false, urgency: Urgency.Low, finishTo: new Date('5/2/16')},
  //   {id: 102, name: 'Доделать работу', description: 'Some text 2', status: false, urgency: Urgency.Hi, finishTo: new Date('1/20/16')},
  //   {id: 103, name: 'Отослать письмо по работе', description: 'Some text 3', status: true, urgency: Urgency.Middle, finishTo: new Date('3/2/17')},
  //   {id: 104, name: 'Написать еще один Ангуляр компонент', description: 'Some text 4', status: false, urgency: Urgency.Hi, finishTo: new Date('1/12/15')},
  //   {id: 105, name: 'Пополнить счет на телефоне', description: 'Some text 2', status: false, urgency: Urgency.Low, finishTo: new Date('1/20/16')},
  //   {id: 106, name: 'Посмотреть фильм', description: 'Some text 3', status: true, urgency: Urgency.Middle, finishTo: new Date('3/2/17')},
  //   {id: 107, name: 'Test8', description: '', status: false, urgency: Urgency.Hi, finishTo: new Date('1/12/15')}
  // ];
  //
  // getAllTasks2 (): Observable<Task[]> {
  //   return new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(this.items);
  //       observer.complete();
  //     }, 400);
  //   });
  // }
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
