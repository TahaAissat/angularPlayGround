import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-demo-obs',
  templateUrl: './page-demo-obs.component.html',
  styleUrl: './page-demo-obs.component.scss'
})
export class PageDemoObsComponent {
  observable = new Observable ( obs => {
    obs.next(1)
    obs.next(2)
  })

  constructor(){
    this.observable.subscribe(data => {
      console.log(data)
    })
  }
}
