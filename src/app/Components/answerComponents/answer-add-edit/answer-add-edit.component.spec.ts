import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerAddEditComponent } from './answer-add-edit.component';

describe('AnswerAddEditComponent', () => {
  let component: AnswerAddEditComponent;
  let fixture: ComponentFixture<AnswerAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
