import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  public orders! : Order[]  ; 
  public headers: string[] = [
    "Action", 
    "Type", 
    "Client", 
    "Nb Jours", 
    "Tjm HT", 
    'Total HT', 
    "Total TTC", 
    "Etat"
  ]

  constructor(private ordersService : OrdersService){
  }
  ngOnInit(){
    this.ordersService.getDatas().subscribe(data => {
      this.orders = data
      console.log('Commandes' , this.orders)
    }) 
  }

}
