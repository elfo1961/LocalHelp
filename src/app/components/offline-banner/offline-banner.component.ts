import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'offline-banner',
  templateUrl: './offline-banner.component.html',
  styleUrls: ['./offline-banner.component.scss'],
  standalone: true,
})
export class OfflineBannerComponent  implements OnInit {
@Input() isOnline: boolean | null = null;
  constructor() { }

  ngOnInit() {}

}
