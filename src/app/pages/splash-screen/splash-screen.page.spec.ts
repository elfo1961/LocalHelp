import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { SplashScreenPage } from './splash-screen.page';
import { ConnectivityService } from '../../services/connectivity/connectivity.service';
import { OfflineBannerComponent } from '../../shared/components/offline-banner/offline-banner.component';

describe('SplashScreenPage (offline‑aware)', () => {

  let fixture: ComponentFixture<SplashScreenPage>;
  let component: SplashScreenPage;

  let routerSpy: jasmine.SpyObj<Router>;
  let online$: BehaviorSubject<boolean>;
  let mockConnectivity: Partial<ConnectivityService>;

  beforeEach(async () => {

    // controllable connectivity stream
    online$ = new BehaviorSubject<boolean>(true);

    mockConnectivity = {
      onlineChanges$: online$.asObservable(),
      isOnline: () => online$.value
    };

    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [
        SplashScreenPage,
        OfflineBannerComponent
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ConnectivityService, useValue: mockConnectivity }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenPage);
    component = fixture.componentInstance;
  });

  // ------------------------------------------------------------
  // BDD: Splash screen UI should render
  // ------------------------------------------------------------
  it('should display the splash screen UI', () => {
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.splash-screen'));
    expect(el).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Offline banner should be present
  // ------------------------------------------------------------
  it('should include the offline banner component', () => {
    fixture.detectChanges();
    const banner = fixture.debugElement.query(By.directive(OfflineBannerComponent));
    expect(banner).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Should navigate when online
  // ------------------------------------------------------------
  it('should navigate to /welcome when online', fakeAsync(() => {
    online$.next(true);
    fixture.detectChanges();

    tick(1000); // simulate startup delay

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/welcome');
  }));

  // ------------------------------------------------------------
  // BDD: Should NOT navigate when offline
  // ------------------------------------------------------------
  it('should NOT navigate when offline', fakeAsync(() => {
    online$.next(false);
    fixture.detectChanges();

    tick(2000); // even after time passes, no navigation

    expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();
  }));

  // ------------------------------------------------------------
  // BDD: Should show offline startup warning when offline
  // ------------------------------------------------------------
  it('should show an offline startup warning message when offline', () => {
    online$.next(false);
    fixture.detectChanges();

    const warning = fixture.debugElement.query(By.css('.startup-blocked'));
    expect(warning).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Should resume startup when connectivity is restored
  // ------------------------------------------------------------
  it('should resume initialization when connectivity is restored', fakeAsync(() => {
    // start offline
    online$.next(false);
    fixture.detectChanges();

    tick(2000);
    expect(routerSpy.navigateByUrl).not.toHaveBeenCalled();

    // go online
    online$.next(true);
    fixture.detectChanges();

    tick(1000); // startup delay

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/welcome');
  }));

});
