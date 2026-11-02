import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },

  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida.page').then(m => m.BienvenidaPage),
  },

  {
  path: 'login',
  loadComponent: () =>
    import('./pages/login/login.page')
      .then(m => m.LoginPage),
},

  // ---- Pantallas CON barra de tabs (hijas de "tabs") ----
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then(m => m.TabsPage),
   children: [
  { path: 'inicio', loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage) },
  { path: 'catalogo', loadComponent: () => import('./pages/catalogo/catalogo.page').then(m => m.CatalogoPage) },
  { path: 'favoritos', loadComponent: () => import('./pages/favoritos/favoritos.page').then(m => m.FavoritosPage) },
  { path: 'perfil', loadComponent: () => import('./pages/perfil/perfil.page').then(m => m.PerfilPage) },
  { path: 'carrito', loadComponent: () => import('./pages/carrito/carrito.page').then(m => m.CarritoPage) },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
],
  },

  // ---- Pantallas SIN barra de tabs (se abren por encima) ----
  {
    path: 'detalle-producto',
    loadComponent: () => import('./pages/detalle-producto/detalle-producto.page').then(m => m.DetalleProductoPage),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/carrito/carrito.page').then(m => m.CarritoPage),
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then(m => m.CheckoutPage),
  },
];