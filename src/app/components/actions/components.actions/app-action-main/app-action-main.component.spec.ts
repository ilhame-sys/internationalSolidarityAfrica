import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActionMainComponent } from './app-action-main.component';

describe('AppActionMainComponent', () => {
  let component: AppActionMainComponent;
  let fixture: ComponentFixture<AppActionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
