import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrl: './proyectos.page.scss',
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent],
})
export class ProyectosPage {
  projects = [
    { name: 'Sala Verde', edited: 'Editado hoy', img: 'assets/proyecto-1.jpg' },
    { name: 'Dormitorio Principal', edited: 'Editado ayer', img: 'assets/proyecto-2.jpg' },
    { name: 'Oficina en casa', edited: 'Editado 3 días', img: 'assets/proyecto-3.jpg' },
  ];

  constructor() {
    addIcons({ add });
  }
}
