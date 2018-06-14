import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextpanelComponent } from './contextpanel.component';

describe('ContextpanelComponent', () => {
  let component: ContextpanelComponent;
  let fixture: ComponentFixture<ContextpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
