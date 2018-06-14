import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from '../tab/tab.interface';

@Component({
  selector: 'app-tabs',
  template: `<ul class="nav nav-tabs">
  <li *ngFor="let tab of tabs" [class.active]="tab.active">
    <a (click)="selectTab(tab)">{{tab.tabTitle}}</a>
  </li>
</ul>
<ng-content></ng-content>`
})
export class TabsComponent {

  tabs: Tab[] = [];
  @Output() selected = new EventEmitter();

  addTab(tab: Tab) {
    if (!this.tabs.length) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

  selectTab(tab: Tab) {
    this.tabs.map((tab) => {
      tab.active = false;
    });
    tab.active = true;
    this.selected.emit({selectedTab: tab});
  }
}
