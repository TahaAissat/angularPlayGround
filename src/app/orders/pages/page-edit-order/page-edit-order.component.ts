import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../core/models/order';


@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss'
})
export class PageEditOrderComponent {

  public init! : Order
  public id!: any;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.ordersService.getDatasByID(id).subscribe(data => {
      console.log(data)
      this.init = data;
    });
  }


  onEdit(data:Order) {
    let id = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl('/orders');
  }
}
