import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  detail: string;
  price: number;
  qty: number;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  // Productos que están actualmente en el carrito
  items = signal<CartItem[]>([]);

  // Costo del envío
  shipping = 490;

  // Subtotal de los productos
  subtotal = computed(() =>
    this.items().reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    )
  );

  // Total de la compra
  total = computed(() =>
    this.subtotal() + this.shipping
  );

  // Verificar si un producto ya está en el carrito
  estaEnCarrito(id: number): boolean {
    return this.items().some(item => item.id === id);
  }

  // Agregar un producto
  agregarProducto(producto: CartItem): void {
    const existe = this.estaEnCarrito(producto.id);

    if (existe) {
      return;
    }

    this.items.update(lista => [
      ...lista,
      { ...producto, qty: 1 }
    ]);
  }

  // Eliminar un producto
  eliminarProducto(id: number): void {
    this.items.update(lista =>
      lista.filter(item => item.id !== id)
    );
  }

  // Cambiar la cantidad de un producto
  changeQty(id: number, delta: number): void {
    this.items.update(lista =>
      lista.map(item =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + delta)
            }
          : item
      )
    );
  }

  // Vaciar todo el carrito
  vaciarCarrito(): void {
    this.items.set([]);
  }
}