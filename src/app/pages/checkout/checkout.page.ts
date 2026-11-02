import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
  IonContent, IonFooter, IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrl: './checkout.page.scss',
  imports: [
    CurrencyPipe,
    IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle,
    IonContent, IonFooter, IonButton,
  ],
})
export class CheckoutPage {
  // Datos de ejemplo fijos
  address = {
    name: 'Ana García',
    street: 'Av. Insurgentes Sur 1234',
    city: 'Col. Del Valle, CDMX, 03100',
  };

  card = { last4: '4242' };

  subtotal = 14920;
  shipping = 490;

  get total() {
    return this.subtotal + this.shipping;
  }

  pay() {
    console.log('Pagar', this.total);
  }
}
