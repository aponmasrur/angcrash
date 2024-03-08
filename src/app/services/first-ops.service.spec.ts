import { TestBed } from '@angular/core/testing';

import { FirstOpsService } from './first-ops.service';

describe('FirstOpsService', () => {
  let service: FirstOpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstOpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
