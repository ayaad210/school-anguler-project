import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStudentsComponent } from './parent-students.component';

describe('ParentStudentsComponent', () => {
  let component: ParentStudentsComponent;
  let fixture: ComponentFixture<ParentStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
