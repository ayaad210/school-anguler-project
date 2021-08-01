import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupAddEditComponent } from './group-add-edit.component';

describe('GroupAddEditComponent', () => {
  let component: GroupAddEditComponent;
  let fixture: ComponentFixture<GroupAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
