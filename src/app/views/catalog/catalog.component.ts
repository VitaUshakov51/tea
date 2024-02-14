import { Component, OnInit } from '@angular/core';
import {CatalogListService} from "../../shared/services/catalog-list.service";
import {tap} from "rxjs";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private catalogList: CatalogListService) { }

  products: ProductType[] = [];
  loading:boolean = false;
  ngOnInit(): void {
    this.loading = true
    this.catalogList.getCatalog()
      .subscribe({
        next: (data) => {
          this.loading = false;
          this.products = data
        },
        error: (err) => {
          console.log(err);
        }
      })
  }


}
