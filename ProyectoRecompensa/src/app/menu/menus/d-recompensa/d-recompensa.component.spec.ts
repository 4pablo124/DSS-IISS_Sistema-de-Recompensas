import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DRecompensaComponent } from './d-recompensa.component';

describe('DRecompensaComponent', () => {
  let component: DRecompensaComponent;
  let fixture: ComponentFixture<DRecompensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DRecompensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
