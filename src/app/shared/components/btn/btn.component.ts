import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {

  @Input() label! : string;
  @Input() styleBtn! : string ;
  @Input() routeInfo! : string ;


}
