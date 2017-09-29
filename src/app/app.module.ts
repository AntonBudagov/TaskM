import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// material Module
import {
  MdGridListModule, MdSlideToggleModule, MdChipsModule, MdCheckboxModule, MdListModule,
  MdIconModule, MdSelectModule, MdButtonModule, MdCardModule, MdInputModule, MatDatepickerModule, MdNativeDateModule,
  MdToolbarModule, MdSliderModule, MdSidenavModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routes } from './router';
import { TaskService } from './task/task.service';
import { AppService } from './app.service';
import { TaskEditComponent } from './task/task-edit/task-edit.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskAddComponent } from './task/task-add/task-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DashboardComponent,
    TaskEditComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,


    MdGridListModule,
    MdCardModule,
    MdSlideToggleModule,
    MdChipsModule,
    MdCheckboxModule,
    MdListModule,
    MdIconModule,
    MdSelectModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdSidenavModule,
    // MatDatepickerModule,
    MdNativeDateModule

  ],
  providers: [TaskService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
