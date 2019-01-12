import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RJugadorFormComponent } from './r-jugador-form.component';

describe('RJugadorFormComponent', () => {
  let component: RJugadorFormComponent;
  let fixture: ComponentFixture<RJugadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RJugadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RJugadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
