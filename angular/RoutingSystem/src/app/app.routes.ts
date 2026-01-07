import { Routes } from '@angular/router';
import { Home } from './myCompenents/home/home';
import { Products } from './myCompenents/products/products';
import { ProductDetail } from './myCompenents/product-detail/product-detail';
import { NotFound } from './myCompenents/not-found/not-found';

export const routes: Routes = [
    //1) Ana sayfa 
    //path: ''  => root url: (http://localhost:4200/)
    {path: '', component: Home},

    {path: 'products', component: Products},

    //:id => dinamik segment. Bu şekilde verilen değerler ActivatedRoute ile yakalanabilir.
    {path: 'products/:id', component: ProductDetail},

    //Opsiyoneldir ama olacaksa en sona yazılmalıdır.
    {path: '**', component: NotFound}
];
