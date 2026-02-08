import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

import { WelcomePage } from './welcome.page';

describe('WelcomePage', () => {

  let fixture: ComponentFixture<WelcomePage>;
  let component: WelcomePage;

  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {

    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [WelcomePage],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
  });

  // ------------------------------------------------------------
  // UI: The page should display the page title
  // ------------------------------------------------------------
  it('should display the correct title text', () => {
    fixture.detectChanges();
    const titleEl = fixture.debugElement.query(By.css('.title')).nativeElement;
    expect(titleEl.textContent.trim()).toBe('Welcome Page');
  });
  // ------------------------------------------------------------
  // UI: The page should welcome the user
  // ------------------------------------------------------------
  it('should display a welcome message', () => {
    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css('.page'));
    expect(el).not.toBeNull();
    var msg = fixture.debugElement.query(By.css('.welcome-message')).nativeElement;
    expect(msg.textContent.trim()).toBe('Welcome to LocalHelp');
    msg = fixture.debugElement.query(By.css('.welcome-subtitle')).nativeElement;
    expect(msg.textContent.trim()).toBe('The app that helps connect people who need help with people who can offer it.');
  });

  // ------------------------------------------------------------
  // Behavior: Language selection
  // ------------------------------------------------------------
  it('should allow users to choose the language for the app interface', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-language'));
    expect(btn).not.toBeNull();
  });

  // ------------------------------------------------------------
  // Behavior: Navigate to Login Page
  // ------------------------------------------------------------
  it('should allow users to access the login form', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-login'));
    btn.triggerEventHandler('click');

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/login');
  });

  // ------------------------------------------------------------
  // Behavior: Navigate to Registration Page
  // ------------------------------------------------------------
  it('should allow users to access the registration form', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-register'));
    btn.triggerEventHandler('click');

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/register');
  });

  // ------------------------------------------------------------
  // Behavior: Continue as Guest
  // ------------------------------------------------------------
  it('should allow users to access help requests and service offers without logging in', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-guest'));
    btn.triggerEventHandler('click');

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  // ------------------------------------------------------------
  // Behavior: Navigate to Credits Page
  // ------------------------------------------------------------
  it('should allow users to access the credits page', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-credits'));
    btn.triggerEventHandler('click');

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/credits');
  });

  // ------------------------------------------------------------
// Behavior: Navigate to Password Recovery Page
// ------------------------------------------------------------
  it('should allow users to access the password recovery page', () => {
    fixture.detectChanges();

    const btn = fixture.debugElement.query(By.css('.btn-recover'));
    btn.triggerEventHandler('click');

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/recover');
  });
});
