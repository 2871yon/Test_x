import { TestBed } from '@angular/core/testing';

import { Grid1Service } from './grid-1.service';

describe('Grid1Service', () => {
  let service: Grid1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Grid1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
