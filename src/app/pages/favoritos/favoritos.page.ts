import { Component, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

interface Item {
  id: number;
  name: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrl: './favoritos.page.scss',
  imports: [CurrencyPipe, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonIcon],
})
export class FavoritosPage {
  items = signal<Item[]>([
    { id: 1, name: 'Sofá Nórdico', price: 8450, img: 'assets/sofa.png' },
    { id: 2, name: 'Silla Oslo', price: 2350, img: 'assets/silla.png' },
    { id: 3, name: 'Mesa Toscana', price: 4120, img: 'assets/mesa.png' },
    { id: 4, name: 'Lámpara Nordic', price: 1150, img: 'assets/lampara.png' },
  ]);

  constructor() {
    addIcons({ heart });
  }

  remove(id: number) {
    this.items.update((list) => list.filter((i) => i.id !== id));
  }
}