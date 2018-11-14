import { TestBed } from '@angular/core/testing';

import { BooklistDataBackendService } from './booklist-data-backend.service';

describe('BooklistDataBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooklistDataBackendService = TestBed.get(BooklistDataBackendService);
    expect(service).toBeTruthy();
  });
});
