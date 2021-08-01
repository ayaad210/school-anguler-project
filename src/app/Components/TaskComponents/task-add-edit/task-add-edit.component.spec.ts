import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAddEditComponent } from './task-add-edit.component';

describe('TaskAddEditComponent', () => {
  let component: TaskAddEditComponent;
  let fixture: ComponentFixture<TaskAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
