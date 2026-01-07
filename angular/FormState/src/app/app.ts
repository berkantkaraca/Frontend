import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('formState');

  //Form Values
  name = signal('');

  //Form States
  touched = signal(false);
  dirty = signal(false);

  /**
   * valid: 
   * -isim boş olmayacak
   * -isim en az 3 karakter uzunluğunda olacak
   */
  valid = computed(() => {
    return this.name().trim().length >= 3;
  });

  invalid = computed(() => {
    return !this.valid();
  });

  //Input değiştiğinde "değer değişti => dirty = true" olacak
  //Form, kendi hayatı ola nbir state mekanizmasıdır. Form doğru/yanlış, dokunuldu/dokunulmadı, değişti/ değişmedi gibi. Bunlar submite basmakla alakalı değildir.
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.name.set(value);
    this.dirty.set(true);
  }

  /**
   * inputtan çıkıldığında kullanıcının dokunuşu true olur
   */
  onBlur(): void {
    this.touched.set(true);
  }


  submit(): void {
    alert("Gönderildi: " + this.name());
  }



}

/*
  Bir değer kullanıcıdan gelmiyorsa, Apıden gelmiyorsa, kaydedilmeyecekse, sadece hesaplanacaksa o değer state değil computed'dır.
*/
