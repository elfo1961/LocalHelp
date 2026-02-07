import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { fakeAsync, tick } from '@angular/core/testing';

import { SplashScreenPage } from './splash-screen.page';

describe('SplashScreenPage', () => {

  let fixture: ComponentFixture<SplashScreenPage>;
  let component: SplashScreenPage;

  // We will spy on Angular Router to verify navigation
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    // Create a spy for the Router with only the methods we need
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [SplashScreenPage], // standalone page
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenPage);
    component = fixture.componentInstance;
  });

  // ------------------------------------------------------------
  // BDD: The splash screen should render a non-interactive UI
  // ------------------------------------------------------------
  it('should display the splash screen UI', () => {
    fixture.detectChanges();

    // Look for a root splash element (we will define it later)
    const splashEl = fixture.debugElement.query(By.css('.splash-screen'));

    // Expect it to exist
    expect(splashEl).not.toBeNull();
  });

  // ------------------------------------------------------------
  // BDD: The splash screen should automatically navigate
  // ------------------------------------------------------------

  it('should automatically navigate to the Welcome Page', fakeAsync(() => {
    fixture.detectChanges();
    // Fast‑forward time by 1000 ms
    tick(1000);
    // Expect navigation to have been triggered to the Welcome Page
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/welcome');
  }));
});
