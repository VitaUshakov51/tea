import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogListService} from "../../../shared/services/catalog-list.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product-pages',
  templateUrl: './product-pages.component.html',
  styleUrls: ['./product-pages.component.scss']
})
export class ProductPagesComponent implements OnInit {

  product: ProductType
  loading:boolean = false;
  constructor(private activatedRoute: ActivatedRoute,private catalogList: CatalogListService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.params.subscribe((params)=> {
      if (params['id']) {

        this.catalogList.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.loading = false;
              this.product = data
            },
            error: (error) => {
              this.router.navigate(['/'])
            }
          })
      }
    })
  }

}
