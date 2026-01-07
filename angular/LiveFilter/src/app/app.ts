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
  protected readonly title = signal('categoryFiltering');

  categories = signal<string[]>([
    'All',
    'Books',
    'Electronics',
    'Clothing',
    'Sports',
    "Tablet",
    "Laptop",
    "Telefone",
    "Monitor",
    "Headphone",
    "Camera"
  ]);

  //Arama metni
  searchText = signal<string>('');

  filteredCategories = computed(() => {
    const query = this.searchText().toLowerCase();
    const list = this.categories();

    if (!query) {
      return list;
    }

    return list.filter(category => category.toLowerCase().includes(query));
  });

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchText.set(value);
  }
}
