import { TestBed } from '@angular/core/testing';

import { MyCarsServiceService } from './my-cars-service.service';

describe('MyCarsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCarsServiceService = TestBed.get(MyCarsServiceService);
    expect(service).toBeTruthy();
  });
});
