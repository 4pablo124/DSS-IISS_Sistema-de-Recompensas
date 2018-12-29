import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDLCComponent } from './c-dlc.component';

describe('CDLCComponent', () => {
  let component: CDLCComponent;
  let fixture: ComponentFixture<CDLCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDLCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDLCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
