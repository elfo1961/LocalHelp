import { TestBed } from '@angular/core/testing';
import { Platform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';

describe('LocalHelp App – Startup', () => {

  // This will simulate the async "platform.ready()" call from Ionic.
  let platformReady: Promise<string>;

  // This will be our fake Platform object.
  let platformSpy: jasmine.SpyObj<Platform>;

  beforeEach(async () => {

  // This promise simulates Ionic's platform.ready() resolving.
  // In a real device/browser, Ionic waits for the platform to be ready
  // before running any startup logic.
  platformReady = Promise.resolve('ready');

  // Ionic's Platform service exposes several observables and objects
  // that Ionic components rely on internally.
  // We create a manual mock that contains ONLY the pieces Ionic will touch.
  platformSpy = {

    // The ready() method must exist and return a promise.
    // Our BDD spec also waits for this promise to resolve.
    ready: jasmine.createSpy().and.returnValue(platformReady),

    // Ionic calls platform.backButton.subscribeWithPriority(...)
    // when setting up navigation and hardware back-button behavior.
    // If this object or method is missing, tests will crash.
    backButton: {
      subscribeWithPriority: jasmine.createSpy('subscribeWithPriority')
    },

    // Some Ionic components subscribe to platform.pause
    // (e.g., when the app goes to background).
    pause: {
      subscribe: jasmine.createSpy('pauseSubscribe')
    },

    // Same for platform.resume (when the app returns to foreground).
    resume: {
      subscribe: jasmine.createSpy('resumeSubscribe')
    }

    // We cast this object as "any" because we are not implementing
    // the full Platform interface — only the parts we need.
  } as any;

  // Now we configure Angular's testing module.
  // Since AppComponent is a standalone component, we IMPORT it,
  // not declare it.
  await TestBed.configureTestingModule({
    imports: [
      AppComponent, // standalone root component
    ],
    providers: [
      // Provide our custom Platform mock instead of the real service.
      { provide: Platform, useValue: platformSpy },

      // Because AppComponent uses <ion-router-outlet>,
      // Angular Router must exist in the test environment.
      // provideRouter([]) gives us a minimal, empty router setup.
      provideRouter([]),
    ],
  }).compileComponents();
});

  it('should show a splash page on startup', async () => {
    // Create the component just like Angular would at runtime.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Trigger Angular's change detection.
    fixture.detectChanges();

    // Wait for the simulated platform.ready() to resolve.
    await platformReady;

    // BDD expectation: the app should be in "splash mode".
    expect(app.showSplash).toBeTrue();
  });

  it('should check for internet connectivity on startup', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Spy on the method we expect to be called during startup.
    spyOn(app, 'checkConnectivity');

    fixture.detectChanges();
    await platformReady;

    // BDD expectation: connectivity check must run on startup.
    expect(app.checkConnectivity).toHaveBeenCalled();
  });
});
