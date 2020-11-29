import { Injectable } from '@angular/core';
import { Producto } from './producto-list/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

cartList:Producto[] =[];

constructor() { }

  addToCart(producto: Producto) {
    this.cartList.push(producto);
    
  }

  
}
