import { TestBed } from '@angular/core/testing';

import { ClothesApiService } from './clothes-api.service';

describe('ClothesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothesApiService = TestBed.get(ClothesApiService);
    expect(service).toBeTruthy();
  });
});
