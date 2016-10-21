/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AttributeAuthorityService } from './attribute-authority.service';

describe('Service: AttributeAuthority', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttributeAuthorityService]
    });
  });

  it('should ...', inject([AttributeAuthorityService], (service: AttributeAuthorityService) => {
    expect(service).toBeTruthy();
  }));
});
