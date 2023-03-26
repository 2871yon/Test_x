import { TestBed } from '@angular/core/testing';

import { Grid2Service } from './grid-2.service';

describe('Grid2Service', () => {
  let service: Grid2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grid2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
