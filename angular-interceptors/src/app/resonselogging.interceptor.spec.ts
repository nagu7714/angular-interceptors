import { TestBed } from '@angular/core/testing';

import { ResonseloggingInterceptor } from './resonselogging.interceptor';

describe('ResonseloggingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ResonseloggingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ResonseloggingInterceptor = TestBed.inject(ResonseloggingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
