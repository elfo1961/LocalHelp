import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [
    CommonModule,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
  ],
  templateUrl: './app-language-selector.component.html',
  styleUrls: ['./app-language-selector.component.scss']
})
export class AppLanguageSelectorComponent {
    languages = [
    { value: 'en', label: 'English' },
    { value: 'it', label: 'Italiano' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'es', label: 'Español' },
    { value: 'pt', label: 'Português' }
  ];
 }
