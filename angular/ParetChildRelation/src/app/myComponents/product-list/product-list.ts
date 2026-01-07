import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  //@Input: parent component bu property'e veri gönderebilir demek. Parent, child'a veri gönderebilir.
  @Input() products: Product[] = [];




}
