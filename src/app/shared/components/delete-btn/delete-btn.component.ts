import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-delete-btn',
  templateUrl: './delete-btn.component.html',
  styleUrl: './delete-btn.component.scss'
})
export class DeleteBtnComponent {

@Output() deleted = new EventEmitter

onClick() {
  this.deleted.emit()
}
}
