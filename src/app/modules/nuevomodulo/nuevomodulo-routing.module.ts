import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LarengaBiographyComponent } from '../../larenga-biography/larenga-biography.component';
import { LarengaHomeComponent } from '../../larenga-home/larenga-home.component';
import { LarengaProductComponent } from '../../larenga-product/larenga-product.component';
import {LarengaDiscographyComponent} from '../../larenga-discography/larenga-discography.component';
import { LarengaShowsComponent } from '../../larenga-shows/larenga-shows.component';


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
