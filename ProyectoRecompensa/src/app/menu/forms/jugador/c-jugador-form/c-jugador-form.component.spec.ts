import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CJugadorFormComponent } from './c-jugador-form.component';

describe('CJugadorFormComponent', () => {
  let component: CJugadorFormComponent;
  let fixture: ComponentFixture<CJugadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CJugadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CJugadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
