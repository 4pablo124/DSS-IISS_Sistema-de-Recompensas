import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaRecompensaComponent } from './nueva-recompensa.component';

describe('NuevaRecompensaComponent', () => {
  let component: NuevaRecompensaComponent;
  let fixture: ComponentFixture<NuevaRecompensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaRecompensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
