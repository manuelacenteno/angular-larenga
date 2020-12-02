import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LarengaBiographyComponent } from 'src/app/larenga-biography/larenga-biography.component';
import { LarengaHomeComponent } from 'src/app/larenga-home/larenga-home.component';
import { LarengaProductComponent } from 'src/app/larenga-product/larenga-product.component';
import {LarengaDiscographyComponent} from 'src/app/larenga-discography/larenga-discography.component';
import { LarengaShowsComponent } from 'src/app/larenga-shows/larenga-shows.component';
//import { LarengaBiographyComponent } from 'src/app/larenga-biography/larenga-biography.component';

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
  /*{
    path: 'biography',
  component: LarengaBiographyComponent,
  },*/
  {
    path: 'discography',
  component: LarengaDiscographyComponent,
  },
  {
    path: 'sales',
  component: LarengaProductComponent,
  },
  {
    path: 'shows',
  component: LarengaShowsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NuevomoduloRoutingModule { }
