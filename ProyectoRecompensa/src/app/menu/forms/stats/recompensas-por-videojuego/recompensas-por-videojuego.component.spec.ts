import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecompensasPorVideojuegoComponent } from './recompensas-por-videojuego.component';

describe('RecompensasPorVideojuegoComponent', () => {
  let component: RecompensasPorVideojuegoComponent;
  let fixture: ComponentFixture<RecompensasPorVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecompensasPorVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecompensasPorVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
