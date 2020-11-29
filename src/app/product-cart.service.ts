import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './producto-list/producto';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {
  private _cartList:Producto[] =[];

cartList: BehaviorSubject < Producto[] > = new BehaviorSubject ([]);

constructor() { }

  addToCart(producto: Producto) {
    let item: Producto = this._cartList.find((v1) => v1.product==producto.product);
    if(!item){
      this._cartList.push({ ... producto});
    }
    else{
      item.quantity += producto.quantity;
    }
    console.log(this._cartList.length);
    this.cartList.next(this._cartList);
    
  }

  
}
