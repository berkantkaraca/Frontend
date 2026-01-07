import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../models/product";

/*
    Custom Pipe: 
    Pipe'ın görevi: ürün listesini filtrelemek

    searchText'e göre ürün ismi içinde arama yapacak
    maxPrice'e göre fiyat filtresi yapacak
*/

@Pipe({
    name: 'productFilter',
    standalone: true,
    pure: true, //input değişmediği sürece pipe yeniden çalışmaz

})
export class ProductFilterPipe implements PipeTransform {
    transform(products: Product[], searchText: string, maxPrice: number | null): Product[] {
        if (!products) return [];

        const text = (searchText ?? '').trim().toLowerCase();

        return products.filter(product => {
            const nameOk = text.length === 0 ? true : product.name.toLowerCase().includes(text);
            const priceOk = maxPrice === null || Number.isNaN(maxPrice) ? true : product.price <= maxPrice;
            return nameOk && priceOk;
        });
    }
}
