import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from '../../components/app-header/app-header.component';
import { OfflineBannerComponent } from "../../components/offline-banner/offline-banner.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  imports: [
    CommonModule,
    AppHeaderComponent,
    OfflineBannerComponent,
]
})
export class AppLayoutComponent {
  @Input() title = '';
}
