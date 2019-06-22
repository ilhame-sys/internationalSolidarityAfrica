import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShowActionComponent } from './app-show-action.component';

describe('AppShowActionComponent', () => {
  let component: AppShowActionComponent;
  let fixture: ComponentFixture<AppShowActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShowActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
