import { TestBed, inject } from '@angular/core/testing';

import { LoginVerificationService } from './login-verification.service';

describe('LoginVerificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginVerificationService]
    });
  });

  it('should be created', inject([LoginVerificationService], (service: LoginVerificationService) => {
    expect(service).toBeTruthy();
  }));
});
