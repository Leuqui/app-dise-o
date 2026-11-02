import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, searchOutline, heart, heartOutline } from 'ionicons/icons';

interface Producto {
  nombre: string;
  precio: number;
  categoria: string;
  img: string;
  fav: boolean;
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
    { nombre: 'Sillón Nórdico', precio: 160, categoria: 'Sofás',  img: 'assets/imgCatal1.png', fav: false },
    { nombre: 'Silla Oslo',     precio: 80,  categoria: 'Sillas', img: 'assets/imgCatal2.png',     fav: false },
    { nombre: 'Mesa Toscana',   precio: 190, categoria: 'Mesas',  img: 'assets/imgCatal3.png',   fav: false },
    { nombre: 'Silla Viena',    precio: 60,  categoria: 'Sillas', img: 'assets/imgCatal4.png',    fav: false },
  ];

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, searchOutline, heart, heartOutline });
  }

  filtrados(): Producto[] {
    const t = this.texto.trim().toLowerCase();
    return this.productos.filter(p =>
      (this.categoria === 'Todos' || p.categoria === this.categoria) &&
      p.nombre.toLowerCase().includes(t));
  }

  irDetalle() {
    // Cambiá la ruta por la que tengas en app.routes.ts
    this.router.navigate(['/detalle-producto']);
  }
}