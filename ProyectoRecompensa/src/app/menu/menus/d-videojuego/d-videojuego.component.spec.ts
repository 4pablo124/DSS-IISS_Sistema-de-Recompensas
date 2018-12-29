import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVideojuegoComponent } from './d-videojuego.component';

describe('DVideojuegoComponent', () => {
  let component: DVideojuegoComponent;
  let fixture: ComponentFixture<DVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
