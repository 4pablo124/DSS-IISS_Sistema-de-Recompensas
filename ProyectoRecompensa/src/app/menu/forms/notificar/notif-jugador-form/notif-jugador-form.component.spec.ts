import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifJugadorFormComponent } from './notif-jugador-form.component';

describe('NotifJugadorFormComponent', () => {
  let component: NotifJugadorFormComponent;
  let fixture: ComponentFixture<NotifJugadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifJugadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifJugadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
