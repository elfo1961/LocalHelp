import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { exitOutline, homeOutline, sparklesOutline } from 'ionicons/icons';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

addIcons({
  'exit-outline': exitOutline,
  'home-outline': homeOutline,
  'sparkles-outline': sparklesOutline,
});

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
