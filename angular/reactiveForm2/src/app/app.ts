import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('reactiveForm2');

  /**
    Formun tamam valid mi
    tğm alanların tek seferde resetlenmesi
    FormGrroup: birden fazla FormControl'ün tek bir form gibi davranmasını sağlar   
  */

  contactForm = new FormGroup({
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),

    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    phone: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]
    }),
  });

  submit(): void {
    if (this.contactForm.invalid) {
      return;
    }

    //FormGroup içindeki tüm verileri object olarak verir
    console.log(this.contactForm.value);
   alert('Form başarıyla gönderildi!');
    this.contactForm.reset();
  }

}
