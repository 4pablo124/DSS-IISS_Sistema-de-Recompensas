import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RRecompensaFormComponent } from './r-recompensa-form.component';

describe('RRecompensaFormComponent', () => {
  let component: RRecompensaFormComponent;
  let fixture: ComponentFixture<RRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
