import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, NavController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  notificationsOutline, searchOutline, ellipsisHorizontal,
  heart, heartOutline, homeOutline, albumsOutline, personOutline,
} from 'ionicons/icons';

interface Product { id: number; name: string; img: string; fav: boolean; }

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [FormsModule, IonContent, IonIcon],
})
export class InicioPage {
  private nav = inject(NavController);

  query = '';

  // Cambia estas rutas por tus imágenes en src/assets/img/
  categories = [
    { name: 'Sofás',  img: 'assets/sofa.png' },
    { name: 'Sillas', img: 'assets/silla.png' },
    { name: 'Mesas',  img: 'assets/mesa.png' },
    { name: 'Camas',  img: 'assets/cama.png' },
  ];

  inspiration = [
    { title: 'Sala Moderna',      img: 'assets/sala-moderna.png' },
    { title: 'Dormitorio Nórdico', img: 'assets/dormitorio-nordico.png' },
    { title: 'Dormitorio Nórdico', img: 'assets/dormitorio-nordico.png' },
  ];

  products: Product[] = [
    { id: 1, name: 'Sillón Nórdico', img: 'assets/sillon.png', fav: false },
    { id: 2, name: 'Mesa Toscana',   img: 'assets/mesa2.png',   fav: false },
    { id: 3, name: 'Cama Nórdica',   img: 'assets/mesa2.png',   fav: false },
  ];

  constructor() {
    addIcons({
      notificationsOutline, searchOutline, ellipsisHorizontal,
      heart, heartOutline, homeOutline, albumsOutline, personOutline,
    });
  }

  // Oculta la imagen si el archivo no existe (evita el icono roto)
  hideImg(ev: Event) {
    (ev.target as HTMLImageElement).style.visibility = 'hidden';
  }

  goTo(path: string) {
    this.nav.navigateForward(path);
  }

  openCategory(name: string) {
    this.nav.navigateForward('/tabs/catalogo', { queryParams: { category: name } });
  }

  search() {
    const q = this.query.trim();
    if (q) this.nav.navigateForward('/tabs/catalogo', { queryParams: { q } });
  }

  toggleFav(p: Product, ev: Event) {
    ev.stopPropagation(); // que no abra el catálogo al tocar el corazón
    p.fav = !p.fav;
  }
}