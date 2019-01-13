import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RUDRecompensaFormComponent } from './rud-recompensa-form.component';

describe('RRecompensaFormComponent', () => {
  let component: RUDRecompensaFormComponent;
  let fixture: ComponentFixture<RUDRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RUDRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RUDRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
