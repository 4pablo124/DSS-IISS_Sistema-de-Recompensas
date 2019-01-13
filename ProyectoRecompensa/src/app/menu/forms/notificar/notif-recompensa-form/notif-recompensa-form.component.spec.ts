import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifRecompensaFormComponent } from './notif-recompensa-form.component';

describe('NotifRecompensaFormComponent', () => {
  let component: NotifRecompensaFormComponent;
  let fixture: ComponentFixture<NotifRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
