import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RVideojuegoComponent } from './r-videojuego.component';

describe('RVideojuegoComponent', () => {
  let component: RVideojuegoComponent;
  let fixture: ComponentFixture<RVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
