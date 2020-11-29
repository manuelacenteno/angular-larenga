import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  producto: ProductCartService;

  constructor() { 
    this.producto = new ProductCartService
  }

  ngOnInit(): void {
  }

}
