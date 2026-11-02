import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';

import {
  homeOutline,
  albumsOutline,
  heartOutline,
  personOutline,
  cartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {

  constructor(private router: Router) {
    addIcons({
      homeOutline,
      albumsOutline,
      heartOutline,
      personOutline,
      cartOutline
    });
  }

  ir3D(ev: Event) {
    ev.preventDefault();
    // Cuando tengas la pantalla 3D, agregá acá la navegación.
  }
}