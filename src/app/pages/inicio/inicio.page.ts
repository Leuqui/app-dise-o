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
    { name: 'Sofás',  img: 'assets/img/cat-sofa.png' },
    { name: 'Sillas', img: 'assets/img/cat-silla.png' },
    { name: 'Mesas',  img: 'assets/img/cat-mesa.png' },
    { name: 'Camas',  img: 'assets/img/cat-cama.png' },
  ];

  inspiration = [
    { title: 'Sala Moderna',      img: 'assets/img/inspo-sala.jpg' },
    { title: 'Dormitorio Nórdico', img: 'assets/img/inspo-dormitorio.jpg' },
    { title: 'Dormitorio Nórdico', img: 'assets/img/inspo-dormitorio.jpg' },
  ];

  products: Product[] = [
    { id: 1, name: 'Sillón Nórdico', img: 'assets/img/prod-sillon.png', fav: false },
    { id: 2, name: 'Mesa Toscana',   img: 'assets/img/prod-mesa.png',   fav: false },
    { id: 3, name: 'Cama Nórdica',   img: 'assets/img/prod-cama.png',   fav: false },
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