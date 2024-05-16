import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../core/models/order';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateOrder } from '../../../core/enums/state-order';
import { OrderTypes } from '../../../core/enums/order-types';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {

  @Input() objOrder!: Order;
  @Output() submitted = new EventEmitter()
  public form!: FormGroup;

  // Enums
  public states = Object.values(StateOrder)
  public orderTypes = Object.values(OrderTypes)
  

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      client: [this.objOrder.client],
      comment: [this.objOrder.comment],
      nbJours: [this.objOrder.nbJours],
      state: [this.objOrder.state],
      tjmHt: [this.objOrder.tjmHt],
      tva: [this.objOrder.tva],
      typePresta: [this.objOrder.typePresta],
      // id: [this.objOrder.id],
    });
  }

  onSubmit() {
    this.submitted.emit(this.form.value)
  }
}
