import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ConnectivityService } from '../../services/connectivity/connectivity.service';
import { OfflineBannerComponent } from '../../shared/components/offline-banner/offline-banner.component';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
  standalone: true,
  imports: [
    OfflineBannerComponent
  ]
})
export class SplashScreenPage implements OnInit {
  isOnline = true;

  // Inject the Angular Router so we can navigate programmatically
  constructor(
    private router: Router,
    private connectivity: ConnectivityService
  ) { }

  ngOnInit() {

    // Track connectivity
    this.connectivity.onlineChanges$.subscribe(status => {
      this.isOnline = status;

      // If we just came online, resume startup
      if (status) {
        this.startInitialization();
      }
    });

    // If already online at startup, begin initialization
    if (this.connectivity.isOnline()) {
      this.startInitialization();
    }
  }

  private startInitialization() {
    // Delay simulates startup tasks
    setTimeout(() => {
      // Only navigate if still online
      if (this.isOnline) {
        this.router.navigateByUrl('/welcome');
      }
    }, 1000);
  }
}
