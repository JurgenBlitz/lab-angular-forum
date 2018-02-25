import { TestBed, inject } from '@angular/core/testing';

import { AuthGetService } from './auth-get.service';

describe('AuthGetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGetService]
    });
  });

  it('should be created', inject([AuthGetService], (service: AuthGetService) => {
    expect(service).toBeTruthy();
  }));
});
