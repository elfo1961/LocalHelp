import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { AppLayoutComponent } from '../../shared/layouts/app-layout/app-layout.component';


@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    RouterLink,
    AppLayoutComponent
  ],
})
export class WelcomePage {

  chooseLanguage() {
    console.log('Language selection not implemented yet');
  }
}
