import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent {
  public clients : any ; 
  
  constructor(private clientsService : ClientsService) {} ; 

  ngOnInit() {
    this.clientsService.getDatas().subscribe(data => {
      this.clients = data
      console.log('Clients', this.clients)
    })
  }
}
