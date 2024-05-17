import { Component } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss'
})
export class PageListClientsComponent {
  public clients : any ;
  public headers : string[] = [
    'Actions',
    'Nom',
    'Comment',
    'State',
    'totalCaHt',
    'TVA',
    'Total TTC'
  ] 
  
  constructor(private clientsService : ClientsService, private router : Router) {} ; 

  ngOnInit() {
    this.clientsService.getDatas().subscribe(data => {
      this.clients = data
    })
  }

  onDelete(id:any){
    this.clientsService.deleteDatas(id).subscribe(() => {
      this.clients = this.clients.filter((e:any) => e.id !== id)
    })
  }
}
