import { Component, Input, OnInit } from '@angular/core';
import { Tab } from './tab.interface';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  template: `<div [hidden]="!active">
  <ng-content></ng-content>
</div>`
})
export class TabComponent implements OnInit, Tab {

  @Input() tabTitle;
  @Input() active;

  constructor(private tabsComponent: TabsComponent) {}

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
}
