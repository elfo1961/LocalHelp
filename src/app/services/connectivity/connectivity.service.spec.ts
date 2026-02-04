import { TestBed } from '@angular/core/testing';
import { ConnectivityService } from './connectivity.service';
import { skip } from 'rxjs/operators';

describe('ConnectivityService – Connectivity Behavior', () => {

  let service: ConnectivityService;

  function createService() {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [ConnectivityService],
    });
    return TestBed.inject(ConnectivityService);
  }
  /* recreates service instance; called in each test to reset state and spies;
  it must be called after any navigator.onLine spy is set,
  because the service reads that value at construction time.
  */

  it('should be created', () => {
    service = createService();
    expect(service).toBeTruthy();
  }); // done

  it('should return true when the browser reports online', () => {
    spyOnProperty(navigator, 'onLine', 'get').and.returnValue(true);

    service = createService();

    expect(service.isOnline()).toBeTrue();
  }); // done

  it('should return false when the browser reports offline', () => {
    spyOnProperty(navigator, 'onLine', 'get').and.returnValue(false);

    service = createService();

    expect(service.isOnline()).toBeFalse();
  }); // done

  it('should emit connectivity changes (online → offline)', (done) => {
    let fakeOnline = true;

    spyOnProperty(navigator, 'onLine', 'get').and.callFake(() => fakeOnline);

    service = createService();

    const emitted: boolean[] = [];

    const sub = service.onlineChanges$
      .pipe(skip(1))
      .subscribe(value => {
        emitted.push(value);

        if (emitted.length === 2) {
          expect(emitted).toEqual([true, false]);
          sub.unsubscribe();
          done();
        }
      }); // done

// Simulate going online then offline
    fakeOnline = true;
    window.dispatchEvent(new Event('online'));

    fakeOnline = false;
    window.dispatchEvent(new Event('offline'));
  });
});
