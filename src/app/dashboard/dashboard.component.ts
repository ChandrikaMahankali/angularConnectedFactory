import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class DashboardComponent implements OnInit {
  contextpanel = 'out';
  contextpanelfilter = 'out';
  alertdetails = 'out';

  ngOnInit() {

  }

  openContextPanelFactory(tab) {
    this.contextpanel = this.contextpanel === 'out' ? 'in' : 'out';
  }

  openContextPanelAlarms(tab) {
    if (tab === 'alarmsFilter') {
      this.contextpanelfilter = this.contextpanelfilter === 'out' ? 'in' : 'out';
    } else if (tab === 'alarmsAlerts') {
      this.alertdetails = this.alertdetails === 'out' ? 'in' : 'out';
    }
  }
}
