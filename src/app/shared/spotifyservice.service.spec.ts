import { TestBed } from '@angular/core/testing';

import { SpotifyserviceService } from './spotifyservice.service';

describe('SpotifyserviceService', () => {
  let service: SpotifyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
