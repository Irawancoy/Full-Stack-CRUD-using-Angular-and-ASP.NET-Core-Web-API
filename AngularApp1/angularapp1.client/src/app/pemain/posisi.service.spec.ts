import { TestBed } from '@angular/core/testing';

import { PosisiService } from './posisi.service';

describe('PosisiService', () => {
  let service: PosisiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosisiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
