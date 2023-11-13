import { TestBed } from '@angular/core/testing';

import { AboutuscontactService } from './aboutuscontact.service';

describe('AboutuscontactService', () => {
  let service: AboutuscontactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutuscontactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
