import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonButton,
/*
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonIcon
  */
} from '@ionic/angular/standalone';

import { AppHeaderComponent } from '../../shared/components/app-header/app-header.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,

    // Page components
    IonContent,
    IonButton,
/*
    // Header components (required because <app-header> uses them)
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonIcon,
*/
    AppHeaderComponent
  ],
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss']
})
export class WelcomePage {
  constructor(private router: Router) {}

  chooseLanguage() {
    console.log('Language selection not implemented yet');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToRecover() {
    this.router.navigateByUrl('/recover');
  }

  continueAsGuest() {
    this.router.navigateByUrl('/home');
  }

  goToCredits() {
    this.router.navigateByUrl('/credits');
  }
}
