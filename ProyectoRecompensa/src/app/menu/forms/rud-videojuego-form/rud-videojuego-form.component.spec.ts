import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudVideojuegoFormComponent } from './rud-videojuego-form.component';

describe('RudVideojuegoFormComponent', () => {
  let component: RudVideojuegoFormComponent;
  let fixture: ComponentFixture<RudVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
