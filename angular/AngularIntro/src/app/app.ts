import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBinding } from './myComponents/data-binding/data-binding';
import { Directives } from './myComponents/directives/directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBinding, Directives], //DataBinding componentini import ettik
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //Angular class property'lerine protected erişim belirleyici dışarıya erişim açarken standarttur
  //Bir property elinize signal ile geçiyorsa onu parantez içinde çağırmanız gerekir. title() gibi
  protected readonly title = signal('mUsTaFa');
  protected readonly version = '1.0.0';
}
