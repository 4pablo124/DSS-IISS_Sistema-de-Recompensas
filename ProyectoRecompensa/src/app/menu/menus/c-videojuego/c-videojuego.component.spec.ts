import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVideojuegoComponent } from './c-videojuego.component';

describe('CVideojuegoComponent', () => {
  let component: CVideojuegoComponent;
  let fixture: ComponentFixture<CVideojuegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVideojuegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVideojuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
