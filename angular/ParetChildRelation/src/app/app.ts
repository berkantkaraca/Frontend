import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './myComponents/product-list/product-list';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('paretChildRelation');

  /**
    Burası parent component. Burada ürün listesi olacak ve child çağrıldığında bu listeyi göndereceğiz. Modern state yönetimi için signal kullandık.
  */

  products = signal<Product[]>([
    new Product(1, 'Product 1', 100),
    new Product(2, 'Product 2', 200),
    new Product(3, 'Product 3', 3010),
    new Product(4, 'Product 4', 32010),
    new Product(5, 'Product 5', 4500),
  ]);

}
