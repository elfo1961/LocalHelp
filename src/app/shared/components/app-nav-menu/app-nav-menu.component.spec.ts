import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppNavMenuComponent } from './app-nav-menu.component';
import { Router, provideRouter } from '@angular/router';

describe('AppNavMenuComponent – Navigation Menu Structure', () => {

  let fixture: ComponentFixture<AppNavMenuComponent>;
  let component: AppNavMenuComponent;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [AppNavMenuComponent],
    providers: [
      provideRouter([]) // ← replaces RouterTestingModule
    ]
  }).compileComponents();

  fixture = TestBed.createComponent(AppNavMenuComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});
  // ------------------------------------------------------------
  // B: The nav menu should contain a list of navigation items
  // ------------------------------------------------------------
  it('should contain an IonList for navigation items', () => {
    const ionList = fixture.debugElement.query(By.css('ion-list'));
    expect(ionList).not.toBeNull();
  });
  // ------------------------------------------------------------
  // B2: The nav menu should display a fixed title above the list
  // ------------------------------------------------------------
  it('should display a fixed menu title above the navigation list', () => {
    const title = fixture.debugElement.query(By.css('.nav-menu-title'));
    expect(title).not.toBeNull();

    const text = title.nativeElement.textContent.trim();
    expect(text).toBe("Main Menu"); // title must be exactly "Main Menu"
  });
  describe('Home Navigation Item', () => {
    describe('Structure and Content', () => {
      // ------------------------------------------------------------
      // C: The nav menu should contain a Home entry with label and icon
      // ------------------------------------------------------------
      it('should contain a Home entry with label and icon', () => {
        const homeItem = fixture.debugElement.query(By.css('.nav-home'));
        expect(homeItem).not.toBeNull();

        const label = homeItem.query(By.css('ion-label'));
        expect(label).not.toBeNull();
        expect(label.nativeElement.textContent.trim()).toBe('Home');

        const icon = homeItem.query(By.css('ion-icon'));
        expect(icon).not.toBeNull();
      });
    });
    describe('Navigation Behavior', () => {
      // ------------------------------------------------------------
      // D: The Home entry should navigate to '/home' when tapped
      // ------------------------------------------------------------
      it('should navigate to "/home" when the Home entry is tapped', () => {
        const router = TestBed.inject(Router);
        const navigateSpy = spyOn(router, 'navigateByUrl');

        const homeItem = fixture.debugElement.query(By.css('.nav-home'));
        homeItem.nativeElement.click();
        fixture.detectChanges();

        const call = navigateSpy.calls.mostRecent();

        // Angular passes a UrlTree, so we compare its string form
        expect(call.args[0].toString()).toBe('/home');

        // And we still accept any extras object
        expect(call.args[1]).toEqual(jasmine.any(Object));
      });
    });
    describe('should display the right icon for the Home entry', () => {
      it('should display the home-outline icon for the Home entry', () => {
        const homeItem = fixture.debugElement.query(By.css('.nav-home'));
        const icon = homeItem.query(By.css('ion-icon'));
        expect(icon.nativeElement.getAttribute('name')).toBe('home-outline');
      });
    });
  });
});
