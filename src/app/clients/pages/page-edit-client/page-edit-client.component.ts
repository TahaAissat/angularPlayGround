import { Component } from '@angular/core';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss'
})
export class PageEditClientComponent {

  public init! : Client;
  public id! : any

  constructor(
    private clientsService : ClientsService,
    private route : ActivatedRoute,
    private router : Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id')
    this.clientsService.getDatasById(id).subscribe(data => {
      this.init = data;
    })
  }

  onEdit(data : Client) {
    let id = this.route.snapshot.paramMap.get('id');
    this.clientsService.updateDatasById(id,data).subscribe(() => {
      this.router.navigateByUrl('/clients');
    })
  }
}
