import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UVideojuegoComponent } from './u-videojuego.component';

describe('UVideojuegoComponent', () => {
  let component: UVideojuegoComponent;
  let fixture: ComponentFixture<UVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
