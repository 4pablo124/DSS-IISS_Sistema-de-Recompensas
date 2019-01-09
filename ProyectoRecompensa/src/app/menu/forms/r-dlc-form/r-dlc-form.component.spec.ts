import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDlcFormComponent } from './r-dlc-form.component';

describe('RudDlcFormComponent', () => {
  let component: RDlcFormComponent;
  let fixture: ComponentFixture<RDlcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDlcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDlcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
