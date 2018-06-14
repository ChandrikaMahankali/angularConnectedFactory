import { Injectable } from '@angular/core';
import * as c3 from 'c3';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  createGaugeChart(id, data) {
    const gauge = c3.generate({
      bindto: id,
      data: {
        columns: [
          ['data', data]
        ],
        type: 'gauge'
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
      },
      gauge: {
        label: {
          show: false
        },
        units: ' %',
        width: 35 // for adjusting arc thickness
      },
      color: {
        pattern: ['#2caf7d', '#2caf7d', '#2caf7d', '#2caf7d', '#2caf7d'], // the three color levels for the percentage values.
        threshold: {
          values: [90]
        }
      },
      size: {
        height: 150,
        width: 200
      }
    });
  }

  createSplineChart(id, data) {
    const chart = c3.generate({
      bindto: id,
      data: {
        json: {
            data: data,
        },
        type: 'spline'
      },
      legend: {
        show: false
      },
      tooltip: {
        show: false
      },
      color: {
        pattern: ['#2caf7d']
      },
      size: {
        height: 150,
        width: 250
      }
    });
  }
}
