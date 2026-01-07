import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

/*
  child component: 
  parent'tan gelen ürünleri listeleyecek
  Kullanıcı chil'den bir ürün seçtiğinde, bu ürünü parent component'e bildirecek

  EventEmitter:
  parent => child data akışı: @Input
  child => parent data akışı (event üretilir): @Output
  EventEmitter<T>: (oluşan eventi yakalar) Child'ın parent'a veri göndermesi için kullanılır

  emit(value): value dışarı yayınlanıyor, dinleyen gözlemciler bu değeri alabilir

  (selected) = "onProductSelected($event)"
  $event: child'ın emit ettiği değeri temsil eder
*/

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  //Input: Parent => Child iletişimi
  @Input() products: Product[] = [];

  //Output + EventEmitter: Child => Parent iletişimi
  //Child içinde bir event yayınlamak için (emit etmek) kullanılır. Parent bu event'i template'inde dinler. Bunun için output keyword'ü ile işaretlenmiş EventEmitter tanımlanır.
  @Output() selected = new EventEmitter<number>();

  selectProduct(productId: number) {
    //emit metodu ile parent component'e productId bilgisini gönderiyoruz
    this.selected.emit(productId);
  }

  //Sepet işlemleri
  //kartın seçimini tetikleyen click handler
  //butona tıklayınca kartın (click) evet'i de tetiklenmesin diye event yapısın elde edip event propagation'ı durduruyoruz
  @Output() addToCart = new EventEmitter<Product>();

  addProductToCart(product: Product, event: Event) {
    event.stopPropagation(); //kartın click'ini engeller
    this.addToCart.emit(product); //parent'e ürünü gönder
  }
}