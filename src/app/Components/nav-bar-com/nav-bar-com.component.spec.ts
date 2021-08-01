import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComComponent } from './nav-bar-com.component';

describe('NavBarComComponent', () => {
  let component: NavBarComComponent;
  let fixture: ComponentFixture<NavBarComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
