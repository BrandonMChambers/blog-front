import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';

describe('CommentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentService = TestBed.get(CommentService);
    expect(service).toBeTruthy();
  });
});
