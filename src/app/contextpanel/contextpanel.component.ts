import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-contextpanel',
  templateUrl: './contextpanel.component.html',
  styleUrls: ['./contextpanel.component.scss'],
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
export class ContextpanelComponent {

  @Output() closePanelFactory = new EventEmitter();

  closeContextPanel() {
    this.closePanelFactory.emit();
  }
}
