import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRecompensaComponent } from './c-recompensa.component';

describe('CRecompensaComponent', () => {
  let component: CRecompensaComponent;
  let fixture: ComponentFixture<CRecompensaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRecompensaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRecompensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
