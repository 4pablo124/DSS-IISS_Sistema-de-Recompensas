import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRecompensaComponent } from './r-recompensa.component';

describe('RRecompensaComponent', () => {
  let component: RRecompensaComponent;
  let fixture: ComponentFixture<RRecompensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRecompensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
