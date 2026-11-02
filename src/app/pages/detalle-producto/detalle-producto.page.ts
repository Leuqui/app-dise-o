import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBackOutline, heart, heartOutline, star } from 'ionicons/icons';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class DetallePage {
  fav = false;

  producto = {
    nombre: 'Sofa Nórdico',
    precio: 160000,
    rating: 4.8,
    resenas: 124,
    img: 'assets/img/sillon-nordico.png',
    colores: ['#8fb0c4', '#a89284', '#b8b0ac', '#1c1c1e'],
    descripcion: 'Sillón moderno de estilo nórdico, cómodo y elegante, ideal para salas contemporáneas.',
    ancho: 210,
    profundidad: 90,
    alto: 85,
  };

  colorSel = this.producto.colores[3];

  constructor() {
    addIcons({ chevronBackOutline, heart, heartOutline, star });
  }

  agregar3D() {
    // TODO: navegar al espacio 3D con el producto y el color elegido
    console.log('Agregar al 3D', this.producto.nombre, this.colorSel);
  }
}