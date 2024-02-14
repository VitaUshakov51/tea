import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {OneProductComponent} from "./components/one-product/one-product.component";
import {TruncatePipe} from "./pipes/truncate.pipe";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    OneProductComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    OneProductComponent,
    TruncatePipe,
  ]
})
export class SharedModule { }
