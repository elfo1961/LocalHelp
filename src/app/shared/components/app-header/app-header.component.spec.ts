import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppHeaderComponent } from './app-header.component';

fdescribe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(waitForAsync(async () => {
// REPLACE the TestBed.configureTestingModule(...) with:
    await TestBed.configureTestingModule({
      imports: [AppHeaderComponent]         // ← standalone component imported directly
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
    expect(menuButton).not.toBeNull(); // FAILS until HTML is implemented
  });

  it('should display the provided title', () => {
    component.title = 'Test Page';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('ion-title');
    expect(title?.textContent).toContain('Test Page'); // FAILS now
  });

  it('should render the exit button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const exitButton = compiled.querySelector('ion-button ion-icon[name="exit-outline"]');
    expect(exitButton).not.toBeNull(); // FAILS now
  });

  it('should call onExit() when the exit button is clicked', () => {
    spyOn(component, 'onExit');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('ion-buttons[slot="end"] ion-button') as HTMLElement;

    button.click(); // FAILS now because HTML not implemented
    expect(component.onExit).toHaveBeenCalled();
  });
});
