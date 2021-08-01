import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterAddEditComponent } from './semester-add-edit.component';

describe('SemesterAddEditComponent', () => {
  let component: SemesterAddEditComponent;
  let fixture: ComponentFixture<SemesterAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
