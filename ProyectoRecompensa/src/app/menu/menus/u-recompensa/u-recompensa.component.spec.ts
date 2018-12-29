import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { URecompensaComponent } from './u-recompensa.component';

describe('URecompensaComponent', () => {
  let component: URecompensaComponent;
  let fixture: ComponentFixture<URecompensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ URecompensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(URecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
