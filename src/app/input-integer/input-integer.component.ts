import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../producto-list/producto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() 

  quantity: number;

  @Input()
  max: number;


  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter <number>();

  @Output()
  maxReached : EventEmitter<string> = new EventEmitter <string>();


  ngOnInit(): void {
  }

  downQuantity () : void{
    if (this.quantity>0){
    this.quantity--;
    this.quantityChange.emit(this.quantity);}
  }
  
  upQuantity () : void{
    if (this.quantity < this.max){
    this.quantity++;
    this.quantityChange.emit(this.quantity);}
    else {
      this.maxReached.emit("Se agoto el producto");
    }
  }
  

  changeQuantity(event):void{
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
  }
}

