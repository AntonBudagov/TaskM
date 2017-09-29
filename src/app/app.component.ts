import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false,
})
export class AppComponent {
  title = 'app';
  links = [
    { path: '/dashboard', icon: 'home', label: 'Главная'},
    { path: '/task', icon: 'event_name', label: 'Задачи'},
    { path: '/statistics', icon: 'settings', label: 'Статистика'}
  ];
}
