import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-page-demo-subject',
  templateUrl: './page-demo-subject.component.html',
  styleUrl: './page-demo-subject.component.scss'
})
export class PageDemoSubjectComponent {
  subj = new Subject(); 

  constructor(){
    this.subj.subscribe(data => {
      console.log(data)
    })
    this.subj.next(1)
    this.subj.subscribe(data => {
      console.log(data)
    })

    this.subj.next(2)
  }
}
