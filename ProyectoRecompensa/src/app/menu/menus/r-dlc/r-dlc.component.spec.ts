import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDLCComponent } from './r-dlc.component';

describe('RDLCComponent', () => {
  let component: RDLCComponent;
  let fixture: ComponentFixture<RDLCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
