import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RUDVideojuegoFormComponent } from './rud-videojuego-form.component';

describe('RVideojuegoFormComponent', () => {
  let component: RUDVideojuegoFormComponent;
  let fixture: ComponentFixture<RUDVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RUDVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RUDVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
