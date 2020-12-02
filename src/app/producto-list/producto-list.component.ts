import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Producto } from './producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [ 
    {
      "product":"Remera",
      "type":"Hombre",
      "colour":"Bordo",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":true,
      "image":"assets/img/remeraRoja.jpg",
    },
    {
      "product":"Remera",
      "type":"Mujer",
      "colour":"Bordo",
      "price":700,
      "stock": 0,
      "quantity":0,
      "clearance":true,
      "image":"assets/img/remeraDamaBordo.jpg",
  },
    {
      "product":"Remera",
      "type":"Hombre",
      "colour":"Azul",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":false,
      "image":"assets/img/RemeraAzul.jpg",
    },
    {
      "product":"Remera",
      "type":"Hombre",
      "colour":"Verde",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":false,
      "image":"assets/img/RemeraVerde.jpg",
  },
    
  ];
  
  
 
  
  constructor( 

    private producto:ProductCartService ) { 
    
  }



  ngOnInit(): void {
  }

  addToCart(producto):void{
  if(producto.quantity>0){//Si es mayor a cero se agrega al carrito
    this.producto.addToCart(producto);
    producto.stock-= producto.quantity;
    producto.quantity=0;
    
    
  }
  }

  maxReached(m:string){

    alert(m);


  }
 

}
