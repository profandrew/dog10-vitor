import { TestBed } from '@angular/core/testing';

import { HotdogService } from './hotdog.service';

describe('HotdogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotdogService = TestBed.get(HotdogService);
    expect(service).toBeTruthy();
  });
});
