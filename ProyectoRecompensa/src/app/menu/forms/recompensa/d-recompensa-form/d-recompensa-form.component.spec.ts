import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DRecompensaFormComponent } from './d-recompensa-form.component';

describe('DRecompensaFormComponent', () => {
  let component: DRecompensaFormComponent;
  let fixture: ComponentFixture<DRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
