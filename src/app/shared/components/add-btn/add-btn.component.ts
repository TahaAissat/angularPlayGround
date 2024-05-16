import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrl: './add-btn.component.scss'
})
export class AddBtnComponent {
@Input() category : any;
route : any;

constructor(private router : Router) {}

ngOnInit() : void {
  this.route = `${this.category}/add`
}

onClick() {
  this.router.navigateByUrl(this.route)
}
}
