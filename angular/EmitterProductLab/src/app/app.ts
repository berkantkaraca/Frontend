import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductList } from './myComponents/product-list/product-list';
import { Product } from './models/product';
import { ProductFilterPipe } from './pipes/productFilterPipe';
import { CartItem } from './models/cartItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, ProductFilterPipe, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emitterProductLab');

  products = signal<Product[]>([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 4200 },
    { id: 3, name: 'Product 3', price: 546300 },
  ]);

  //filtre input state
  searchText = signal<string>('');
  maxPrice = signal<number | null>(null);

  //child'den gelecek productId
  selectedProductId = signal<number | null>(null);

  selectedProduct = computed(() => {
    const id = this.selectedProductId();
    if (id === null) return null;

    return this.products().find(p => p.id === id) ?? null;
  });

  //Child component event handler
  onChildSelected(productId: number) {
    this.selectedProductId.set(productId);
  }

  //Computed signal ile düz filtreleme (pipe alternatifi)
  filteredProducts = computed(() => {
    const search = this.searchText().toLowerCase().trim();
    const max = this.maxPrice();

    return this.products().filter(product => {
      //İsim filtresi
      const matchesName = search === '' || product.name.toLowerCase().includes(search);
      //Fiyat filtresi
      const matchesPrice = max === null || product.price <= max;

      return matchesName && matchesPrice;
    });
  });

  cart = signal<CartItem[]>([]);

  //Child => Parent
  onAddToCart(product: Product) {
    this.cart.update(currentCart => {
      const existing = currentCart.find(item => item.product.id === product.id);
      if (!existing) {
        //yeni ürün, sepete ekle
        return [...currentCart, { product, quantity: 1 }];

      } else {
        //ürün zaten sepette, miktarını artır
        return currentCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  }

  //Toplamı otomatik hesaplayan 
  cartTotal = computed(() => {
    return this.cart().reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  });

  //Sepetten ürün çıkarma
  removeFromCart(productId: number) {
    this.cart.update(items => {
      const item = items.find(x => x.product.id === productId);
      if (!item) return items; //ürün bulunamadı, değişiklik yapma

      if (item.quantity <= 1) {
        //ürün miktarı 1 veya daha azsa, ürünü tamamen kaldır
        return items.filter(x => x.product.id !== productId);
      }

      //ürün miktarını azalt
      return items.map(x =>
        x.product.id === productId ? { ...x, quantity: x.quantity - 1 } : x
      );
    }
    );
  }
}
