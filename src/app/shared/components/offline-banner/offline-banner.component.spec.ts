import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { OfflineBannerComponent } from './offline-banner.component';
import { ConnectivityService } from '../../../services/connectivity/connectivity.service';

describe('OfflineBannerComponent', () => {

  let component: OfflineBannerComponent;
  let fixture: ComponentFixture<OfflineBannerComponent>;

  // Mock service + controllable subject
  let onlineSubject: BehaviorSubject<boolean>;
  let mockConnectivityService: Partial<ConnectivityService>;

  beforeEach(async () => {
    // Create a controllable BehaviorSubject
    onlineSubject = new BehaviorSubject<boolean>(true);

    // Mock the service
    mockConnectivityService = {
      onlineChanges$: onlineSubject.asObservable(),
      isOnline: () => onlineSubject.value
    };

    await TestBed.configureTestingModule({
      imports: [OfflineBannerComponent],
      providers: [
        { provide: ConnectivityService, useValue: mockConnectivityService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // ------------------------------------------------------------
  // BDD: Banner should be hidden when the device is online
  // ------------------------------------------------------------
  it('should NOT render the banner when service emits true', () => {
    onlineSubject.next(true);
    fixture.detectChanges();

    const banner = fixture.debugElement.query(By.css('.offline-banner'));
    expect(banner).toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Banner should be visible when the device is offline
  // ------------------------------------------------------------
  it('should render the banner when service emits false', () => {
    onlineSubject.next(false);
    fixture.detectChanges();

    const banner = fixture.debugElement.query(By.css('.offline-banner'));
    expect(banner).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Banner should display the correct warning message
  // ------------------------------------------------------------
  it('should display the correct offline message', () => {
    onlineSubject.next(false);
    fixture.detectChanges();

    const banner = fixture.debugElement.query(By.css('.offline-banner'));
    const text = banner.nativeElement.textContent.trim();

    expect(text).toBe('You are currently offline');
  });

  // ------------------------------------------------------------
  // BDD: Banner should apply the correct CSS classes
  // ------------------------------------------------------------
  it('should apply the correct CSS classes when offline', () => {
    onlineSubject.next(false);
    fixture.detectChanges();

    const banner = fixture.debugElement.query(By.css('.offline-banner'));
    const classList = banner.nativeElement.classList;

    expect(classList).toContain('ion-padding');
    expect(classList).toContain('ion-text-center');
    expect(classList).toContain('offline-banner');
  });
});
