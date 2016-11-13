/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KillmailService } from './killmail.service';

describe('Service: Killmail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KillmailService]
    });
  });

  it('should ...', inject([KillmailService], (service: KillmailService) => {
    expect(service).toBeTruthy();
  }));
});
