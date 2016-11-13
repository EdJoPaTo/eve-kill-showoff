/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadKillsService } from './load-kills.service';

describe('Service: LoadKills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadKillsService]
    });
  });

  it('should ...', inject([LoadKillsService], (service: LoadKillsService) => {
    expect(service).toBeTruthy();
  }));
});
