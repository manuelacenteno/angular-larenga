import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  productos: Producto[] = [ 
    {
      "product":"remera",
      "type":"Hombre",
      "colour":"Bordo",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":true,
      "image":"assets/img/remeraRoja.jpg",
    },
    {
      "product":"remera",
      "type":"Mujer",
      "colour":"Bordo",
      "price":700,
      "stock": 0,
      "quantity":0,
      "clearance":true,
      "image":"assets/img/remeraDamaBordo.jpg",
  },
    {
      "product":"remera",
      "type":"Hombre",
      "colour":"Azul",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":false,
      "image":"assets/img/RemeraAzul.jpg",
    },
    {
      "product":"remera",
      "type":"Hombre",
      "colour":"Verde",
      "price":700,
      "stock": 4,
      "quantity":0,
      "clearance":false,
      "image":"assets/img/RemeraVerde.jpg",
  },
    
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m:string){

    alert(m);


  }
 

}
