import { TestBed } from '@angular/core/testing';

import { PemainService } from './pemain.service';

describe('PemainService', () => {
  let service: PemainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
