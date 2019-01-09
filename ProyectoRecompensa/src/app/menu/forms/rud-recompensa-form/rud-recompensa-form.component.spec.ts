import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudRecompensaFormComponent } from './rud-recompensa-form.component';

describe('RudRecompensaFormComponent', () => {
  let component: RudRecompensaFormComponent;
  let fixture: ComponentFixture<RudRecompensaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudRecompensaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudRecompensaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
