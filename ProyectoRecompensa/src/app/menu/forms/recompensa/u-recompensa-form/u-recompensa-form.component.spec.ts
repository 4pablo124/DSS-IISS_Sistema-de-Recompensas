import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URecompensaFormComponent } from './u-recompensa-form.component';

describe('URecompensaFormComponent', () => {
  let component: URecompensaFormComponent;
  let fixture: ComponentFixture<URecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
