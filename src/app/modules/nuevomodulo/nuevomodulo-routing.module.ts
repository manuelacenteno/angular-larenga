import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LarengaBiographyComponent } from 'src/app/larenga-biography/larenga-biography.component';
import { LarengaHomeComponent } from 'src/app/larenga-home/larenga-home.component';
import { LarengaProductComponent } from 'src/app/larenga-product/larenga-product.component';
import {LarengaDiscografiaComponent} from 'src/app/larenga-discografia/larenga-discografia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'home',
  component: LarengaHomeComponent,
  },
  {
    path: 'biography',
  component: LarengaBiographyComponent,
  },
  {
    path: 'discography',
  component: LarengaBiographyComponent,
  },
  {
    path: 'sales',
  component: LarengaProductComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NuevomoduloRoutingModule { }
