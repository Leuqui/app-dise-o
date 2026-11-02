import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  personOutline, locationOutline, folderOpenOutline, bagHandleOutline,
  settingsOutline, helpCircleOutline, chevronForward,
} from 'ionicons/icons';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrl: './perfil.page.scss',
  imports: [IonContent, IonIcon],
})
export class PerfilPage {
  menu = [
    { label: 'Mis datos', icon: 'person-outline' },
    { label: 'Direcciones', icon: 'location-outline' },
    { label: 'Mis proyectos', icon: 'folder-open-outline' },
    { label: 'Mis pedidos', icon: 'bag-handle-outline' },
    { label: 'Configuración', icon: 'settings-outline' },
    { label: 'Ayuda y soporte', icon: 'help-circle-outline' },
  ];

  constructor() {
    addIcons({
      personOutline, locationOutline, folderOpenOutline, bagHandleOutline,
      settingsOutline, helpCircleOutline, chevronForward,
    });
  }
}
