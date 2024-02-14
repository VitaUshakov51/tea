import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPagesComponent} from "./product-pages/product-pages.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path:'catalog', component: ProductComponent,},
  {path:'catalog/:id', component: ProductPagesComponent,},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
