import { TestBed } from '@angular/core/testing';

import { CharacterFacade } from './character.facade';

describe('CharacterFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterFacade = TestBed.inject(CharacterFacade);
    expect(service).toBeTruthy();
  });
});
