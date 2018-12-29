import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RJugadorComponent } from './r-jugador.component';

describe('RJugadorComponent', () => {
  let component: RJugadorComponent;
  let fixture: ComponentFixture<RJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
