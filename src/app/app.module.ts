import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoListComponent } from './producto-list/producto-list.component';
import { FormsModule } from '@angular/forms';
import { LarengaBiographyComponent } from './larenga-biography/larenga-biography.component';
import { LarengaHomeComponent } from './larenga-home/larenga-home.component';
import { LarengaProductComponent } from './larenga-product/larenga-product.component';
import { NuevomoduloRoutingModule } from './modules/nuevomodulo/nuevomodulo-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { LarengaShowsComponent } from './larenga-shows/larenga-shows.component';
import { LarengaDiscographyComponent } from './larenga-discography/larenga-discography.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductoListComponent,
    LarengaBiographyComponent,
    LarengaHomeComponent,
    LarengaProductComponent,
    InputIntegerComponent,
    LarengaShowsComponent,
    LarengaDiscographyComponent,
    CartComponent
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
