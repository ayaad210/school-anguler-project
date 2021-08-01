import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsOfSemesterComponent } from './subjects-of-semester.component';

describe('SubjectsOfSemesterComponent', () => {
  let component: SubjectsOfSemesterComponent;
  let fixture: ComponentFixture<SubjectsOfSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsOfSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsOfSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
