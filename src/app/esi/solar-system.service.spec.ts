/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SolarSystemService } from './solar-system.service';

describe('Service: SolarSystem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolarSystemService]
    });
  });

  it('should ...', inject([SolarSystemService], (service: SolarSystemService) => {
    expect(service).toBeTruthy();
  }));
});
