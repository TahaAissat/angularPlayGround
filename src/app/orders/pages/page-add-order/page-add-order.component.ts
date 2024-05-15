import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss',
})
export class PageAddOrderComponent{
  public order : Order = new Order()
  public keys! : string [] 

  constructor(private  ordersService : OrdersService, private router : Router) {}

  ngOnInit(){
    this.keys = Object.keys(this.order)
    this.myForm.patchValue(this.order)
    console.log('clés', this.keys)
    console.log('order', this.order)
  }

  myForm : FormGroup = new FormGroup({
    client : new FormControl(''),
    comment : new FormControl(''),
    nbJours : new FormControl(''),
    state : new FormControl(''),
    tjmHt : new FormControl(''),
    tva : new FormControl(''),
    typePresta : new FormControl('')
  })
  
  onSubmit() {
    console.log(this.myForm.value)
    this.ordersService.addDatas(this.myForm.value).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/orders')
    })
  }
}
