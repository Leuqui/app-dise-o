import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline, searchOutline, heart, heartOutline,
  home, albumsOutline, personOutline,
} from 'ionicons/icons';

interface Producto {
  nombre: string; precio: number; categoria: string; img: string; fav: boolean;
}

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CatalogoPage {
  texto = '';
  categorias = ['Todos', 'Sofás', 'Sillas', 'Mesas', 'Camas'];
  categoria = 'Todos';

  productos: Producto[] = [
    { nombre: 'Sillón Nórdico', precio: 160, categoria: 'Sofás',  img: 'assets/img/sillon-nordico.png', fav: false },
    { nombre: 'Silla Oslo',     precio: 80,  categoria: 'Sillas', img: 'assets/img/silla-oslo.png',     fav: false },
    { nombre: 'Mesa Toscana',   precio: 190, categoria: 'Mesas',  img: 'assets/img/mesa-toscana.png',   fav: false },
    { nombre: 'Silla Viena',    precio: 60,  categoria: 'Sillas', img: 'assets/img/silla-viena.png',    fav: false },
  ];

  constructor() {
    addIcons({ chevronBackOutline, searchOutline, heart, heartOutline, home, albumsOutline, personOutline });
  }

  filtrados() {
    const t = this.texto.trim().toLowerCase();
    return this.productos.filter(p =>
      (this.categoria === 'Todos' || p.categoria === this.categoria) &&
      p.nombre.toLowerCase().includes(t));
  }
}