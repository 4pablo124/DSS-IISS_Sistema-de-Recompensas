import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVideojuegoFormComponent } from './d-videojuego-form.component';

describe('DVideojuegoFormComponent', () => {
  let component: DVideojuegoFormComponent;
  let fixture: ComponentFixture<DVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
