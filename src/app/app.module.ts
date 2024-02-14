import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PopupService} from "./shared/services/popup.service";
import {CatalogListService} from "./shared/services/catalog-list.service";
import {SharedModule} from "./shared/shared.module";
import {CatalogModule} from "./views/catalog/catalog.module";
import {HomeModule} from "./views/home/home.module";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    CatalogModule,
    HomeModule,
    OrderModule,
    ProductsModule
  ],
  providers: [
    PopupService,
    CatalogListService
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule {
}
