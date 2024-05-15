import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  myForm : FormGroup = new FormGroup ({
    name : new FormControl(''),
    comment : new FormControl(''),
    totalCaHt : new FormControl(''),
    tva : new FormControl(''),
    state : new FormControl('')
  })
  
}
