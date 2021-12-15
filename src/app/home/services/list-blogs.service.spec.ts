import { TestBed } from '@angular/core/testing';

import { ListBlogsService } from './list-blogs.service';

describe('ListBlogsService', () => {
  let service: ListBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
