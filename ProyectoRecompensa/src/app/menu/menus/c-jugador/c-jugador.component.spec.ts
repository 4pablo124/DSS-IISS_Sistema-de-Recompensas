import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CJugadorComponent } from './c-jugador.component';

describe('CJugadorComponent', () => {
  let component: CJugadorComponent;
  let fixture: ComponentFixture<CJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
