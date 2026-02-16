import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router, RouterLink, RouterLinkWithHref, RouterOutlet, provideRouter } from '@angular/router';
import { WelcomePage } from './welcome.page';
import { AppLayoutComponent } from '../../shared/layouts/app-layout/app-layout.component';
import { IonButton, IonContent } from '@ionic/angular/standalone';

describe('WelcomePage', () => {

  let fixture: ComponentFixture<WelcomePage>;
  let component: WelcomePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WelcomePage,
        AppLayoutComponent,
        IonButton,
        IonContent,
        RouterLink,
        RouterLinkWithHref,
        RouterOutlet
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
  });

  it('should render the app-layout component', () => {
    fixture.detectChanges();
    const layout = fixture.debugElement.query(By.css('app-layout'));
    expect(layout).not.toBeNull();
  });

  it('should pass the correct title to app-layout', () => {
    fixture.detectChanges();
    const layout = fixture.debugElement.query(By.css('app-layout'));
    expect(layout.properties['title']).toBe('Welcome');
  });

  it('should display a welcome message and subtitle', () => {
    fixture.detectChanges();

    const msg = fixture.debugElement.query(By.css('.welcome-message')).nativeElement;
    expect(msg.textContent.trim()).toBe('Welcome to LocalHelp');

    const subtitle = fixture.debugElement.query(By.css('.welcome-subtitle')).nativeElement;
    expect(subtitle.textContent.trim()).toBe(
      'The app that helps connect people who need help with people who can offer it.'
    );
  });

  describe('Navigation', () => {
    function expectNavigation(selector: string, expectedUrl: string) {
      fixture.detectChanges();

      const spy = spyOn(Router.prototype, 'navigateByUrl');

      const btn = fixture.debugElement.query(By.css(selector)).nativeElement;
      expect(btn).not.toBeNull();

      btn.click();
      fixture.detectChanges();

      const call = spy.calls.mostRecent();
      expect(call.args[0].toString()).toBe(expectedUrl);
      expect(call.args[1]).toEqual(jasmine.any(Object));
    }
    describe('Authentication and Guest Access', () => {
      it('should display a container with authentication options', () => {
        fixture.detectChanges();
        const container = fixture.debugElement.query(By.css('.auth-container'));
        expect(container).not.toBeNull();
      });
      it('should allow users to access the guest form', () => {
        expectNavigation('.btn-guest', '/home');
      });
      it('should allow users to access the login form', () => {
        expectNavigation('.btn-login', '/login');
      });
      it('should allow users to access the registration form', () => {
        expectNavigation('.btn-register', '/register');
      });
      it('should allow users to access the credits page', () => {
        expectNavigation('.btn-credits', '/credits');
      });
      it('should allow users to access the password recovery page', () => {
        expectNavigation('.btn-recover', '/recover');
      });
    });
    it('should allow users to access help requests and service offers without logging in', () => {
      expectNavigation('.btn-guest', '/home');
    });
  });
});
