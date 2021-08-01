import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentprogressComponent } from './studentprogress.component';

describe('StudentprogressComponent', () => {
  let component: StudentprogressComponent;
  let fixture: ComponentFixture<StudentprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
