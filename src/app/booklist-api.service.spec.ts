import { TestBed } from '@angular/core/testing';

import { BooklistApiService } from './booklist-api.service';

describe('BooklistApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooklistApiService = TestBed.get(BooklistApiService);
    expect(service).toBeTruthy();
  });
});
