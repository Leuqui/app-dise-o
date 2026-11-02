import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';


import {
  chevronBackOutline,
  searchOutline,
  heart,
  heartOutline,
  cart,
  cartOutline
} from 'ionicons/icons';

import { CarritoService } from '../../services/carrito';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  img: string;
  fav: boolean;
  enCarrito: boolean;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
})
export class CatalogoPage {

  texto = '';

  categorias = ['Todos', 'Sofás', 'Sillas', 'Mesas', 'Camas'];

  categoria = 'Todos';

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Sillón Nórdico',
      precio: 160,
      categoria: 'Sofás',
      img: 'assets/imgCatal1.png',
      fav: false,
      enCarrito: false
    },
    {
      id: 2,
      nombre: 'Silla Oslo',
      precio: 80,
      categoria: 'Sillas',
      img: 'assets/imgCatal2.png',
      fav: false,
      enCarrito: false
    },
    {
      id: 3,
      nombre: 'Mesa Toscana',
      precio: 190,
      categoria: 'Mesas',
      img: 'assets/imgCatal3.png',
      fav: false,
      enCarrito: false
    },
    {
      id: 4,
      nombre: 'Silla Viena',
      precio: 60,
      categoria: 'Sillas',
      img: 'assets/imgCatal4.png',
      fav: false,
      enCarrito: false
    }
  ];

  constructor(
    private router: Router,
    private carrito: CarritoService
  ) {
    addIcons({
      chevronBackOutline,
      searchOutline,
      heart,
      heartOutline,
      cart,
      cartOutline
    });
  }

  filtrados(): Producto[] {
    const t = this.texto.trim().toLowerCase();

    return this.productos.filter(p =>
      (this.categoria === 'Todos' ||
        p.categoria === this.categoria) &&
      p.nombre.toLowerCase().includes(t)
    );
  }
agregarAlCarrito(p: Producto) {
  if (this.carrito.estaEnCarrito(p.id)) {
    this.carrito.eliminarProducto(p.id);
  } else {
    this.carrito.agregarProducto({
      id: p.id,
      name: p.nombre,
      detail: p.categoria,
      price: p.precio,
      qty: 1,
      img: p.img
    });
  }
}

  irDetalle() {
    this.router.navigate(['/detalle-producto']);
  }
}