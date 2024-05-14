import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {
  public orders : any ; 

  constructor(private ordersService : OrdersService){
    console.log(this.ordersService.sumUp(1,2))
  }

  ngOnInit(){
    this.ordersService.getDatas().subscribe(data => {
      this.orders = data
      console.log('Commandes' , this.orders)
    }) 
  }
}
