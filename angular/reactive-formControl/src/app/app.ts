import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactive-formControl');

  /*
    nameControl:
    Tek bir inputu temsil eden bir kontrol mekanizmasıdır.
    ilk değer: boş string ('')
    nonNullable: true -> null değer almasını engeller.
    required: boş geçilemez.
    minLength: 3 -> minimum 3 karakter olmalı.
    maxLength: 10 -> maksimum 10 karakter olmalı.

    Burada touched, dirty, valid gibi durumları kontrol etmek zorunda değilsiniz. Angular bu durumları otomatik olarak yönetir.
  */
  nameControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]
  });

  //Reactive Forms, formun valid durumunu otomatik sunar. nameControl.invalid ile kontrol edilebilir.
  submit() : void {
    if (this.nameControl.invalid) {
      alert('Form geçersiz! Lütfen kurallara uygun bir isim girin.');
      //Buton disable edilmediyse, kullanıcı henüz inputa dokunmadıysa hata gözükmyebilir. Bunu iptal etmek için yapıyı touched olarak işartleyebilirsin. Hatalar bu şekilde görünür olur.
      // this.nameControl.markAsTouched(); 
      return;
    }

    alert(`Form başarıyla gönderildi! İsim: ${this.nameControl.value}`);
    this.nameControl.reset(); //Formu sıfırla (value sıfırlanır, touched/dirty stateler temizlenir)
  }

  /*
    ReactiveFormsModule:
    [formGroup], [formControl] direktiflerini kullanabilmek için ReactiveFormsModule modülünü import etmelisiniz. 

    FormControl:
    Tek bir input modelidir. value, touched, dirty, valid/invalid gibi durumları yönetir.

    Validators:
    Hazır doğrulama fonksiyonlarıdır. required, minLength, maxLength gibi.
  */


}
