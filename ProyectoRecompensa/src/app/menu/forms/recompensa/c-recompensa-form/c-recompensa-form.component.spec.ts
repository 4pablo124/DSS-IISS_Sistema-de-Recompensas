import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRecompensaFormComponent } from './c-recompensa-form.component';

describe('CRecompensaFormComponent', () => {
  let component: CRecompensaFormComponent;
  let fixture: ComponentFixture<CRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
