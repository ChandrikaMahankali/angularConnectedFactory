import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextpanelfilterComponent } from './contextpanelfilter.component';

describe('ContextpanelfilterComponent', () => {
  let component: ContextpanelfilterComponent;
  let fixture: ComponentFixture<ContextpanelfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextpanelfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextpanelfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
