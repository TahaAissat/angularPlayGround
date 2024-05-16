import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss',
})
export class PageAddOrderComponent {
  public init: Order = new Order();
  public keys!: string[];

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit() {}

  onAdd(data : Order) {
    this.ordersService.addDatas(data).subscribe(() => {
    this.router.navigateByUrl('/orders')  
    })
  }
}
