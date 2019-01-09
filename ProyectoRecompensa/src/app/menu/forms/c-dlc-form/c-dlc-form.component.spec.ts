import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDlcFormComponent } from './c-dlc-form.component';

describe('CDlcFormComponent', () => {
  let component: CDlcFormComponent;
  let fixture: ComponentFixture<CDlcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDlcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDlcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
