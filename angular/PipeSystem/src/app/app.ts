import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pipeSystem');

  shipName = signal<string>('Enterprise');
  price = signal<number>(1000.564);
  quantity = signal(1);
  createdAt = signal(new Date());

}
