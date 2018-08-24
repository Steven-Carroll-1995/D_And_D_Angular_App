import { TestBed, inject } from '@angular/core/testing';

import { AlertService } from './alert-service.service';

describe('AlertServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
