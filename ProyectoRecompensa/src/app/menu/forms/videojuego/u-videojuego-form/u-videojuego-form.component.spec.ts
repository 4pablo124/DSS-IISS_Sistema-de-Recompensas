import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UVideojuegoFormComponent } from './u-videojuego-form.component';

describe('UVideojuegoFormComponent', () => {
  let component: UVideojuegoFormComponent;
  let fixture: ComponentFixture<UVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
