import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // no se ha realizado nada de back-end

  products: Product []=[

    new Product(1,'Pastel 1', 'Chocolate cake', 7.35, 'https://cdn.pixabay.com/photo/2014/10/13/16/11/cake-486874_1280.jpg'),
    new Product(2,'Pastel 2', 'Vanilla cake', 14.15, 'https://cdn.kiwilimon.com/recetaimagen/35112/40965.jpg'),
    new Product(3,'Pastel 3', 'Croque monsieur', 20, 'https://i.ytimg.com/vi/2iSFl_GYhck/maxresdefault.jpg'),
    new Product(4,'Pastel 4', 'Chocolate cookie', 23.5, 'https://cdn.pixabay.com/photo/2015/05/07/15/08/pastries-756601_1280.jpg'),
    new Product(5,'Pastel 5', 'Chocolate pudding', 22.6, 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg'),
    new Product(6,'Pastel 6', 'Rose cake', 17.9, 'https://cdn.pixabay.com/photo/2017/05/23/22/33/happy-birthday-2338813_1280.jpg'),
    new Product(7,'Pastel 7', 'white cake', 22.3, 'https://cdn.pixabay.com/photo/2016/11/29/11/38/blur-1869227_1280.jpg')

  ];

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
