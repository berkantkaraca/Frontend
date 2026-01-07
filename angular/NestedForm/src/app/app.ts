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
  protected readonly title = signal('NestedForm');

  orderForm = new FormGroup({
    customer: new FormGroup({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
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
    }),

    //Product Form
    product: new FormGroup({
      name: new FormControl<string>('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3)
        ]
      }),

      price: new FormControl<number>(0, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(0)
        ]
      }),
    }),

  });

  submit(): void {
    if (this.orderForm.invalid) {
      return;
    }

    //FormGroup içindeki tüm verileri object olarak verir
    console.log(this.orderForm.value);
    alert('Form başarıyla gönderildi!');
    this.orderForm.reset();
  }
}
