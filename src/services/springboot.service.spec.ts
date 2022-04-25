import { TestBed } from '@angular/core/testing';

import { SpringbootService } from './springboot.service';

describe('SprigbootService', () => {
  let service: SpringbootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpringbootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
