import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss',
})
export class PageAddOrderComponent{
  // constructor(private fb: FormBuilder) {}

  myForm : FormGroup = new FormGroup({
    produit : new FormControl(''),
    nombre : new FormControl('')
  })
  onSubmit() {
    console.log(this.myForm.value);
  }
}
