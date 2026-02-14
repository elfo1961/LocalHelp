import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the burger menu button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuButton = compiled.querySelector('ion-menu-button');
    expect(menuButton).not.toBeNull();
  });

  it('should display the provided title', () => {
    component.title = 'Test Page';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const titleEl = compiled.querySelector('ion-title');
    expect(titleEl?.textContent?.trim()).toContain('Test Page');
  });

  it('should render the exit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const exitIcon = compiled.querySelector('ion-icon[name="exit-outline"]');
    expect(exitIcon).not.toBeNull();
  });

  it('should call onExit() when the exit button is clicked', () => {
    spyOn(component, 'onExit');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const exitButton = compiled.querySelector('ion-buttons[slot="end"] ion-button') as HTMLElement;

    exitButton.click();
    expect(component.onExit).toHaveBeenCalled();
  });
});
