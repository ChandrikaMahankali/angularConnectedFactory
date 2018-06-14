import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Tab } from '../tab/tab.interface';
import * as c3 from 'c3';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressComponent implements AfterViewInit {

  constructor(private chartService: ChartService) { }

  ngAfterViewInit() {
    this.chartService.createSplineChart('#chart', [30, 20, 50, 40, 60, 50]);
    this.chartService.createGaugeChart('#gauge', '74.5');
  }

}
