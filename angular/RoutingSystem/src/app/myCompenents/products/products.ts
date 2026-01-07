import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Product = {
  id: number;
  name: string;
  price: number;
};

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})

export class Products {
  products: Product[] = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 },
  ];
}
