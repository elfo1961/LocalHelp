import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OfflineBannerComponent } from './offline-banner.component';

describe('OfflineBannerComponent', () => {

  // The component instance we will test
  let component: OfflineBannerComponent;

  // The Angular test wrapper that lets us inspect the DOM
  let fixture: ComponentFixture<OfflineBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Standalone components are imported directly
      imports: [OfflineBannerComponent],
    }).compileComponents();

    // Create the component in a test environment
    fixture = TestBed.createComponent(OfflineBannerComponent);

    // Extract the component instance
    component = fixture.componentInstance;

    // Trigger initial Angular change detection
    fixture.detectChanges();
  });

  // ------------------------------------------------------------
  // BASIC CREATION TEST
  // ------------------------------------------------------------
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // ------------------------------------------------------------
  // BDD: Banner should be hidden when the device is online
  // ------------------------------------------------------------
  it('should NOT render the banner when isOnline is true', () => {
    // Set the component state to "online"
    component.isOnline = true;

    // Update the template
    fixture.detectChanges();

    // Try to find the banner in the DOM
    const banner = fixture.debugElement.query(By.css('.offline-banner'));

    // Expect it NOT to exist
    expect(banner).toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Banner should be visible when the device is offline
  // ------------------------------------------------------------
  it('should render the banner when isOnline is false', () => {
    // Set the component state to "offline"
    component.isOnline = false;

    // Update the template
    fixture.detectChanges();

    // Try to find the banner in the DOM
    const banner = fixture.debugElement.query(By.css('.offline-banner'));

    // Expect it to exist
    expect(banner).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: Banner should display the correct warning message
  // ------------------------------------------------------------
  it('should display the correct offline message', () => {
    // Force offline state
    component.isOnline = false;

    // Update the template
    fixture.detectChanges();

    // Find the banner
    const banner = fixture.debugElement.query(By.css('.offline-banner'));

    // Extract its text content
    const text = banner.nativeElement.textContent.trim();

    // Expect the exact message
    expect(text).toBe('You are currently offline');
  });

  // ------------------------------------------------------------
  // BDD: Banner should apply the correct CSS classes
  // ------------------------------------------------------------
  it('should apply the correct CSS classes when offline', () => {
    // Force offline state
    component.isOnline = false;

    // Update the template
    fixture.detectChanges();

    // Find the banner
    const banner = fixture.debugElement.query(By.css('.offline-banner'));

    // Expect the banner to have the Ionic utility classes
    expect(banner.nativeElement.classList).toContain('ion-padding');
    expect(banner.nativeElement.classList).toContain('ion-text-center');

    // And the custom class
    expect(banner.nativeElement.classList).toContain('offline-banner');
  });
});
