import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonFooter, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

interface CartItem {
  id: number;
  name: string;
  detail: string;
  price: number;
  qty: number;
  img: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './carrito.page.html',
  styleUrl: './carrito.page.scss',
  imports: [
    CurrencyPipe, RouterLink,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonFooter, IonButton, IonIcon,
  ],
})
export class CarritoPage {
  items = signal<CartItem[]>([
    { id: 1, name: 'Sofá Nórdico', detail: 'Verdes, patas madera', price: 8450, qty: 1, img: 'assets/sofa.png' },
    { id: 2, name: 'Silla Oslo', detail: 'Gris claro', price: 2350, qty: 1, img: 'assets/silla.png' },
    { id: 3, name: 'Mesa Toscana', detail: 'Roble oscuro', price: 4120, qty: 1, img: 'assets/mesa.png' },
  ]);

  shipping = 490;

  subtotal = computed(() => this.items().reduce((sum, i) => sum + i.price * i.qty, 0));
  total = computed(() => this.subtotal() + this.shipping);

  constructor() {
    addIcons({ trashOutline });
  }

  changeQty(id: number, delta: number) {
    this.items.update((list) =>
      list.map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)),
    );
  }

  remove(id: number) {
    this.items.update((list) => list.filter((i) => i.id !== id));
  }
}