import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrl: './delete-btn.component.scss'
})
export class DeleteBtnComponent {

@Input() category : any;
route : any ; 

constructor(private router:Router) {}

ngOnInit() : void {
  this.route = `${this.category}`
}
onClick() {
  this.router.navigateByUrl(this.route)
}
}
