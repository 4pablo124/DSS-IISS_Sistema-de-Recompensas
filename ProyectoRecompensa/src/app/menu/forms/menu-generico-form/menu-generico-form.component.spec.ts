import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGenericoFormComponent } from './menu-generico-form.component';

describe('MenuGenericoFormComponent', () => {
  let component: MenuGenericoFormComponent;
  let fixture: ComponentFixture<MenuGenericoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGenericoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGenericoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
