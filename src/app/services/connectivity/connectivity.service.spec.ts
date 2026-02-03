import { TestBed } from '@angular/core/testing';
import { ConnectivityService } from './connectivity.service';
import { skip } from 'rxjs/operators';

describe('ConnectivityService – Connectivity Behavior', () => {

  let service: ConnectivityService;

  beforeEach(() => {
    // Create a testing module that provides the service.
    TestBed.configureTestingModule({
      providers: [ConnectivityService],
    });

    // Retrieve an instance of the service.
    service = TestBed.inject(ConnectivityService);
  });

  it('should be created', () => {
    // Basic sanity check: the service exists.
    expect(service).toBeTruthy();
  });

  it('should return true when the browser reports online', () => {
    // navigator.onLine is a browser API we can mock.
    spyOnProperty(navigator, 'onLine').and.returnValue(true);

    // The service should reflect the browser state.
    expect(service.isOnline()).toBeTrue();
  });

  it('should return false when the browser reports offline', () => {
    spyOnProperty(navigator, 'onLine').and.returnValue(false);

    expect(service.isOnline()).toBeFalse();
  });

  it('should emit connectivity changes (online → offline)', (done) => {
    const emitted: boolean[] = [];

    let fakeOnline = true;

    spyOnProperty(navigator, 'onLine', 'get').and.callFake(() => fakeOnline);

    const sub = service.onlineChanges$
      .pipe(skip(1)) // ⬅️ ignore the initial BehaviorSubject emission
      .subscribe((value: boolean) => {
        emitted.push(value);

        if (emitted.length === 2) {
          expect(emitted).toEqual([true, false]);
          sub.unsubscribe();
          done();
        }
      });

    fakeOnline = true;
    window.dispatchEvent(new Event('online'));

    fakeOnline = false;
    window.dispatchEvent(new Event('offline'));
  });
});
