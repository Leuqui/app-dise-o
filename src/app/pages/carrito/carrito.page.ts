import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton,
  IonTitle, IonContent, IonFooter, IonButton, IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-cart',
  templateUrl: './carrito.page.html',
  styleUrl: './carrito.page.scss',
  standalone: true,
  imports: [
    CurrencyPipe, RouterLink,
    IonHeader, IonToolbar, IonButtons, IonBackButton,
    IonTitle, IonContent, IonFooter, IonButton, IonIcon
  ],
})
export class CarritoPage {

  items = this.carrito.items;

  shipping = 490;

  subtotal = computed(() => this.carrito.subtotal());

  total = computed(() => this.subtotal() + this.shipping);
remove: any;

  constructor(public carrito: CarritoService) {
    addIcons({ trashOutline });
  }

  changeQty(id: number, delta: number) {
    this.carrito.changeQty(id, delta);
  }

  eliminarProducto(id: number) {
    this.carrito.eliminarProducto(id);
  }
    }
  
