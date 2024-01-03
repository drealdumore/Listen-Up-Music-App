import { TestBed } from '@angular/core/testing';

import { SpotifyService } from './spotifyservice.service';

describe('SpotifyserviceService', () => {
  let service: SpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
