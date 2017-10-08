import { TestBed, inject } from '@angular/core/testing';

import { CoincapPricesService } from './coincap-prices.service';

describe('CoincapPricesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoincapPricesService]
    });
  });

  it('should be created', inject([CoincapPricesService], (service: CoincapPricesService) => {
    expect(service).toBeTruthy();
  }));
});
