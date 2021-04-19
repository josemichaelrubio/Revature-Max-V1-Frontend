import { TestBed } from '@angular/core/testing';

import { AssociateDataService } from './associate-data.service';

describe('AssociateDataService', () => {
  let service: AssociateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssociateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
