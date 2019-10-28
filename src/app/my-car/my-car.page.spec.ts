import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCarPage } from './my-car.page';

describe('MyCarPage', () => {
  let component: MyCarPage;
  let fixture: ComponentFixture<MyCarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
