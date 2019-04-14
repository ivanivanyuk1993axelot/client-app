import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteListMenuComponent } from './route-list-menu.component';

describe('RouteListMenuComponent', () => {
  let component: RouteListMenuComponent;
  let fixture: ComponentFixture<RouteListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
