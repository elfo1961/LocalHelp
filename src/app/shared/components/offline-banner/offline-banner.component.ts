import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectivityService } from '../../../services/connectivity/connectivity.service';

@Component({
  selector: 'offline-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offline-banner.component.html',
  styleUrls: ['./offline-banner.component.scss'],
})
export class OfflineBannerComponent {
  isOnline = true;

  constructor(private connectivity: ConnectivityService) {
    this.connectivity.onlineChanges$.subscribe(status => {
      this.isOnline = status;
    });
  }
}
