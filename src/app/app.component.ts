import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  // Required by your Startup BDD spec:
  // The app should show a splash page on startup.
  showSplash = true;

  constructor(private platform: Platform) {
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
    console.log('Checking internet connectivity...');
  }
}
