import { Component, OnInit } from '@angular/core';
import { Statistics } from '../models/task.interface';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  isLoaded: Boolean = false;
  statistics: Statistics;
  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.getStatistics().then(values => {
          this.statistics = values;
          this.isLoaded = true;
        },
        error => console.log(error));
  }

}
