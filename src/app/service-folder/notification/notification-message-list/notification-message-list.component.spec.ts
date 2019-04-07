import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMessageListComponent } from './notification-message-list.component';

describe('NotificationMessageListComponent', () => {
  let component: NotificationMessageListComponent;
  let fixture: ComponentFixture<NotificationMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
