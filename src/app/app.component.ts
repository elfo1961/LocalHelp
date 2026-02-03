import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';
import { ConnectivityService } from './services/connectivity/connectivity.service';
import { AsyncPipe } from '@angular/common';
import { OfflineBannerComponent } from './components/offline-banner/offline-banner.component';

  @Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    AsyncPipe,
    OfflineBannerComponent
  ],
})
export class AppComponent {

  // Required by your Startup BDD spec:
  // The app should show a splash page on startup.
  showSplash = true;

  constructor(
    private platform: Platform,
    public connectivity: ConnectivityService
  ) {
    // Startup logic begins here.
    this.initializeApp();
  }

  private async initializeApp() {
    // Ionic waits for the device/platform to be ready.
    await this.platform.ready();

    // Required by your BDD spec:
    // The app should check for internet connectivity on startup.
    this.checkConnectivity();
  }

  // Placeholder method — the spec only requires that it exists
  // and is called during startup.
  checkConnectivity() {
    // Log the current state
    console.log('Initial connectivity:', this.connectivity.isOnline());

    // Subscribe to changes (this is the real integration)
    this.connectivity.onlineChanges$.subscribe(isOnline => {
      console.log('Connectivity changed:', isOnline);
    });
  }
}
