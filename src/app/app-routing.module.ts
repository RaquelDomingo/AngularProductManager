import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: NewProductComponent },
  { path: 'products/edit/:spicy', component: EditProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
