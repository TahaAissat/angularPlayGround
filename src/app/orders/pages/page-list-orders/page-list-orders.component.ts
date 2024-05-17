import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';
import { OrderTypes } from '../../../core/enums/order-types';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  public orders!: Order[];
  public filteredOrders!: Order[];
  public filterOption!: string;
  public orderTypes!: string[];
  public headers: string[] = [
    'Action',
    'Type',
    'Comment',
    'Client',
    'Nb Jours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'Etat',
  ];
  private initial = () => {
    this.ordersService.getDatas().subscribe((data) => {
      this.orders = data;
      this.filteredOrders = data;
    });
  };
  constructor(private ordersService: OrdersService) {
    this.orderTypes = Object.values(OrderTypes);
    this.orderTypes.unshift('NONE');
  }
  ngOnInit() {
    this.initial();
  }
  onDelete(id: any) {
    this.ordersService.deleteDatas(id).subscribe(() => {
      this.orders = this.orders.filter((e: Order) => e.id !== id);
    });
  }
  onClick() {
    if (this.filterOption !== 'NONE') {
      this.filteredOrders = this.orders.filter(
        (e: Order) => e.typePresta === this.filterOption
      );
    } else {
      this.filteredOrders = this.orders;
    }
  }
}
