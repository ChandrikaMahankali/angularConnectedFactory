import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alertdetails',
  templateUrl: './alertdetails.component.html',
  styleUrls: ['./alertdetails.component.scss']
})
export class AlertdetailsComponent {

  @Output() closePanelAlerts = new EventEmitter();

  closeAlertdetails() {
    this.closePanelAlerts.emit('alarmsAlerts');
  }

}
