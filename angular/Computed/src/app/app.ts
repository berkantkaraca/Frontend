import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// signal ile ilgili hesaplamaları yapmak için computed kullanılır
// CommonModule'ü pipe kullanımı için ekledik

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('templateFundamentals');

  //signal: değeri değiştiğinde template otomatik olarak güncellenir
  name = signal<string>(''); //signal reaktif bir değerdir

  //computed: signala bağlı türetilmiş bir değerdir. Name değiştiğinde computed otomatik olarak güncellenir. 
  isNameValid = computed(() => {
    return this.name().trim().length > 0;
  });

  onNameInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value); 
  }

  submit() {
    alert(`Gönderilen isim: ${this.name()}`);
  }



}
