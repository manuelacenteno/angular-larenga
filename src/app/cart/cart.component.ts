import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { Producto } from '../producto-list/producto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable <Producto[]>;

  constructor(private cart: ProductCartService) { 

    this.cartList$ = cart.cartList.asObservable();
    
  }
  
  ngOnInit(): void {
  }

}
