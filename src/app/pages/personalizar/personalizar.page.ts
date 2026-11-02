import { Component, signal } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.page.html',
  styleUrl: './personalizar.page.scss',
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonButton],
})
export class PersonalizarPage {
  fabrics = ['#2e7a56', '#a9c5a0', '#e6dccb', '#9a9a9a', '#2b4c7e'];
  legs = ['#2b2b2b', '#c58a4b', '#b87a3e', '#e8dfcf'];

  fabric = signal(this.fabrics[0]);
  leg = signal(this.legs[1]);
}