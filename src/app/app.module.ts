import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { FormsModule } from '@angular/forms';
import { CartListComponent } from './cart-list/cart-list.component';
import { LarengaBiographyComponent } from './larenga-biography/larenga-biography.component';
import { LarengaHomeComponent } from './larenga-home/larenga-home.component';
import { LarengaProductComponent } from './larenga-product/larenga-product.component';
import { NuevomoduloRoutingModule } from './modules/nuevomodulo/nuevomodulo-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { LarengaDiscografiaComponent } from './larenga-discografia/larenga-discografia.component';
import { LarengaShowsComponent } from './larenga-shows/larenga-shows.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    CartListComponent,
    LarengaBiographyComponent,
    LarengaHomeComponent,
    LarengaProductComponent,
    InputIntegerComponent,
    LarengaDiscografiaComponent,
    LarengaShowsComponent
  ],
  imports: [
    BrowserModule,
    NuevomoduloRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
