import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../../../core/models/client';
import { StateClient } from '../../../core/enums/state-client';


@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.scss'
})
export class FormClientComponent {

  @Input() objClient! : Client;
  @Output() submitted = new EventEmitter
  public form! : FormGroup;

  public states = Object.values(StateClient)

  constructor(
    private fb : FormBuilder,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name : [this.objClient.name],
      comment : [this.objClient.comment],
      state : [this.objClient.state],
      totalCaHt : [this.objClient.totalCaHt],
      tva : [this.objClient.tva]
    })
  }

  onSubmit() {
    this.submitted.emit(this.form.value)
  }
}


