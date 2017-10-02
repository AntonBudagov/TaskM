import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// material Module
import {
  MdGridListModule, MdSlideToggleModule, MdChipsModule, MdCheckboxModule, MdListModule,
  MdIconModule, MdSelectModule, MdButtonModule, MdCardModule, MdInputModule, MatDatepickerModule, MdNativeDateModule,
  MdToolbarModule, MdSliderModule, MdSidenavModule, MdDatepickerModule
} from '@angular/material';
import 'hammerjs';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routes } from './router';
import { TaskService } from './task/task.service';
import { AppService } from './app.service';
import { TaskEditComponent } from './task/task-edit/task-edit.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { StatisticsComponent } from './statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DashboardComponent,
    TaskEditComponent,
    TaskAddComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    // Imports for loading & configuring the in-memory web api
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //  --
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
    MdNativeDateModule,
    MdDatepickerModule


  ],
  providers: [TaskService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
