import { TestBed, inject } from '@angular/core/testing';

import { GetAllHerosService } from './get-all-heros.service';

describe('GetAllHerosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllHerosService]
    });
  });

  it('should be created', inject([GetAllHerosService], (service: GetAllHerosService) => {
    expect(service).toBeTruthy();
  }));
});
