import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppLayoutComponent } from './app-layout.component';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { OfflineBannerComponent } from '../../components/offline-banner/offline-banner.component';

describe('AppLayoutComponent', () => {

  let fixture: ComponentFixture<AppLayoutComponent>;
  let component: AppLayoutComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppLayoutComponent,
        AppHeaderComponent,
        OfflineBannerComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should render the app-header component', () => {
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('app-header'));
    expect(header).not.toBeNull();
  });

  it('should pass the title input to app-header', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    const headerDe = fixture.debugElement.query(By.css('app-header'));
    const headerInstance = headerDe.componentInstance as AppHeaderComponent;

    expect(headerInstance.title).toBe('Test Title');
  });

  it('should render the offline-banner component', () => {
    fixture.detectChanges();
    const banner = fixture.debugElement.query(By.css('offline-banner'));
    expect(banner).not.toBeNull();
  });
  it('should render the language selector component', () => {
    fixture.detectChanges();

    const selector = fixture.debugElement.query(By.css('app-language-selector'));
    expect(selector).not.toBeNull();
  });

  it('should not render the ion-menu component', () => {
    fixture.detectChanges();

    const menu = fixture.debugElement.query(By.css('ion-menu'));
    expect(menu).toBeNull();
  });
it('should not render the ion-content component', () => {
    fixture.detectChanges();

    const content = fixture.debugElement.query(By.css('ion-content'));
    expect(content).toBeNull();
  });
});
