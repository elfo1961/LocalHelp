import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppLanguageSelectorComponent } from './app-language-selector.component';

describe('AppLanguageSelectorComponent', () => {

  let fixture: ComponentFixture<AppLanguageSelectorComponent>;
  let component: AppLanguageSelectorComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLanguageSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLanguageSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should render a language dropdown', () => {
    fixture.detectChanges();

    const select = fixture.debugElement.query(By.css('ion-select'));
    expect(select).not.toBeNull();
  });
  it('should list the available languages with correct labels and values', () => {
    fixture.detectChanges();

    const options = fixture.debugElement.queryAll(By.css('ion-select-option'));
    expect(options.length).toBe(6);

    const expected = [
      { value: 'en', label: 'English' },
      { value: 'it', label: 'Italiano' },
      { value: 'fr', label: 'Français' },
      { value: 'de', label: 'Deutsch' },
      { value: 'es', label: 'Español' },
      { value: 'pt', label: 'Português' }
    ];

    expected.forEach((exp, index) => {
      const optDebug = options[index];

      // Access the underlying component instance
      const optInstance = optDebug.componentInstance;

      expect(optInstance.value).toBe(exp.value);
      expect(optDebug.nativeElement.textContent.trim()).toBe(exp.label);
    });
  });
});
