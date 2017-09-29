import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TaskComponent} from './task/task.component';
import {TaskEditComponent} from './task/task-edit/task-edit.component';



export const routes: Routes = [
 { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'task', component: TaskComponent },
 { path: 'task/:id', component: TaskEditComponent }
];
