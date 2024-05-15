import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OrdersService } from '../../services/orders.service'; 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss'
})
export class PageEditOrderComponent {

  public order!: any;
  public keys!: string[];
  public id!: number;

  constructor(
    private ordersService: OrdersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.ordersService.getDatasByID(id).subscribe((data) => {
      this.order = data;
      this.keys = Object.keys(this.order).filter((e) => e !== 'id');
      this.myForm.patchValue(this.order);
    });
  }

  myForm: FormGroup = new FormGroup({
    client: new FormControl(''),
    comment: new FormControl(''),
    nbJours: new FormControl(''),
    state: new FormControl(''),
    tjmHt: new FormControl(''),
    tva: new FormControl(''),
    typePresta: new FormControl(''),
  });

  onSubmit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.ordersService
      .updateDatasByID(id, this.myForm.value)
      .subscribe((data) => {
        console.log(data);
      });
    this.router.navigateByUrl('/orders');
  }
}
