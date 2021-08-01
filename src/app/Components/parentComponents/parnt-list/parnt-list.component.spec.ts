import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParntListComponent } from './parnt-list.component';

describe('ParntListComponent', () => {
  let component: ParntListComponent;
  let fixture: ComponentFixture<ParntListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParntListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParntListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
