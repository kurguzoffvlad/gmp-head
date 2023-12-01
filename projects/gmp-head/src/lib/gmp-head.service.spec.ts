import { TestBed } from '@angular/core/testing';

import { GmpHeadService } from './gmp-head.service';

describe('GmpHeadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpHeadService = TestBed.get(GmpHeadService);
    expect(service).toBeTruthy();
  });
});
