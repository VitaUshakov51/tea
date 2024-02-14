import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductComponent implements OnInit {

  @Input() product: ProductType
  constructor() {
    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit(): void {
  }

}
