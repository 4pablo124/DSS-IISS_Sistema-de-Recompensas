import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVideojuegoFormComponent } from './c-videojuego-form.component';

describe('CVideojuegoFormComponent', () => {
  let component: CVideojuegoFormComponent;
  let fixture: ComponentFixture<CVideojuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVideojuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVideojuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
