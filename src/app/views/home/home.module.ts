import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {SharedModule} from "../../shared/shared.module";
import {CatalogRoutingModule} from "../catalog/catalog-routing.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeRoutingModule
  ]
})
export class HomeModule { }
