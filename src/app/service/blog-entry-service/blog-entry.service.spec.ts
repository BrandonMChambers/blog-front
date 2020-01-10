import { TestBed } from '@angular/core/testing';

import { BlogEntryService } from './blog-entry.service';

describe('BlogEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogEntryService = TestBed.get(BlogEntryService);
    expect(service).toBeTruthy();
  });
});
