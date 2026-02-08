import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
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
