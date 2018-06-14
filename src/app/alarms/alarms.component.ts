import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss']
})
export class AlarmsComponent implements OnInit {

  @Output() openPanelAlarms = new EventEmitter();

  openContextPanel() {
    this.openPanelAlarms.emit('alarmsFilter');
  }

  openAlertsPanel() {
    this.openPanelAlarms.emit('alarmsAlerts');
  }

  ngOnInit() {
  }

}
