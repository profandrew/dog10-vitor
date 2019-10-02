import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarPage } from './comprar.page';

describe('ComprarPage', () => {
  let component: ComprarPage;
  let fixture: ComponentFixture<ComprarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
