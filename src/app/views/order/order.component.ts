import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {CatalogListService} from "../../shared/services/catalog-list.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  constructor(private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,private catalogService: CatalogListService) {
  }

  titleProduct: string = '';

  form = this.fb.group({
    product: [''],
    name: ['', [Validators.required, Validators.pattern('^[а-яА-Я ]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[а-яА-Я ]+$')]],
    phone: ['', [Validators.required, Validators.pattern('^(?:\\+)?(\\d{11})$'), Validators.minLength(10)]],
    country: ['', Validators.required],
    zip: ['', [Validators.required, Validators.maxLength(6)]],
    address: ['', [Validators.required, Validators.pattern('^[А-Яа-я0-9\\s\\-\\/]*$')]],
    comment: [''],
  })

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params)=> {
      if (params['product']) {
       this.titleProduct = params['product'];
      }
    })

    this.form.get('product')?.disable();
    this.form.patchValue({
      product: this.titleProduct,
    })
  }





  ngOnDestroy(): void {
  this.subscription?.unsubscribe()
  this.subscriptionOrder?.unsubscribe()
  }


  isCreateOrder: boolean = false;
  submit(){
    this.subscriptionOrder = this.catalogService.createOrder({
      name: this.name?.value,
      last_name: this.lastName?.value,
      phone: this.phone?.value,
      country: this.country?.value,
      zip: this.zip?.value,
      product: this.product?.value,
      address: this.address?.value,
      comment: this.comment?.value,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.isCreateOrder = true;
          this.form.reset();
        } else {
          this.isCreateOrder = false;
          alert('Произошла ошибка, попробуйте еще раз')
        }
      })
  }

  get product() {return this.form.get('product')}
  get name() {return this.form.get('name')}
  get lastName() {return this.form.get('lastName')}
  get phone() {return this.form.get('phone')}
  get country() {return this.form.get('country')}
  get zip() {return this.form.get('zip')}
  get address() {return this.form.get('address')}
  get comment() {return this.form.get('comment')}

}
