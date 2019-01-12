import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RVideojuegoFormComponent } from './r-videojuego-form.component';

describe('RVideojuegoFormComponent', () => {
  let component: RVideojuegoFormComponent;
  let fixture: ComponentFixture<RVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
