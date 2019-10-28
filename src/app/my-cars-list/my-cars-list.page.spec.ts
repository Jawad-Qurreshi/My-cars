import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarsListPage } from './my-cars-list.page';

describe('MyCarsListPage', () => {
  let component: MyCarsListPage;
  let fixture: ComponentFixture<MyCarsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
