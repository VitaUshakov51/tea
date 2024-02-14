import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {FormType} from "../../../types/form.type";

@Injectable()
export class CatalogListService implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit():void {
  }

  getCatalog() {
    return this.http.get<ProductType[]>('https://testologia.site/tea');
  }

  getProduct(id: number) {
    return this.http.get<ProductType>('https://testologia.site/tea?id=' + id)
  }

  createOrder(data: FormType){
    return this.http.post<{success: boolean, message?: string}>('https://testologia.site/order-tea', data);
  }
}
