import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  templateUrl: './app-nav-menu.component.html',
  styleUrls: ['./app-nav-menu.component.scss'],
  imports: [
    CommonModule,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    RouterLink
  ]
})
export class AppNavMenuComponent {}
