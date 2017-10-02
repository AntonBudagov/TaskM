import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskComponent} from './task/task.component';
import {TaskEditComponent} from './task/task-edit/task-edit.component';
import {TaskAddComponent} from "./task/task-add/task-add.component";
import {StatisticsComponent} from "./statistics/statistics.component";



export const routes: Routes = [
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'task', component: TaskComponent },
 { path: 'task/add', component: TaskAddComponent },
 { path: 'task/:id', component: TaskEditComponent },
 { path: 'statistics', component: StatisticsComponent },
];
