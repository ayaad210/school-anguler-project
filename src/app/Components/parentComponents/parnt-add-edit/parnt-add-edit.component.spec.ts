import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntAddEditComponent } from './parnt-add-edit.component';

describe('ParntAddEditComponent', () => {
  let component: ParntAddEditComponent;
  let fixture: ComponentFixture<ParntAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParntAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParntAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
