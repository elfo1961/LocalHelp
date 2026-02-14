import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: true,
  imports: []
})
export class SplashScreenPage implements OnInit {

  // Inject the Angular Router so we can navigate programmatically
  constructor(private router: Router) { }

  ngOnInit() {
    // navigate to the Welcome Page after a short delay to simulate initialization work
    // This satisfies the BDD test expecting navigateByUrl('/welcome')
    setTimeout(() => {
      this.router.navigateByUrl('/welcome');
    }, 1000); // 1000 ms = 1 second
  }
}
