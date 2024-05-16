import { Component , Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  @Input() itemId: any;
  @Input() category : any; 
  route: any; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.route = `${this.category}/edit/${this.itemId}`;
  }

  onEdit() {
    this.router.navigateByUrl(this.route);
  }
}
