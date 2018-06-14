import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})

export class FactoryComponent {
  @Output() openPanelFactory = new EventEmitter();

  openContextPanel() {
    this.openPanelFactory.emit();
  }

}
