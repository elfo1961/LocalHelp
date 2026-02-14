import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonContent } from '@ionic/angular/standalone';

import { AppLayoutComponent } from '../../shared/layouts/app-layout/app-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonContent,
    // Your components
    AppLayoutComponent,
],
})

export class HomePage {}
