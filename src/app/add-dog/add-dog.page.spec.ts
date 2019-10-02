import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDogPage } from './add-dog.page';

describe('AddDogPage', () => {
  let component: AddDogPage;
  let fixture: ComponentFixture<AddDogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
