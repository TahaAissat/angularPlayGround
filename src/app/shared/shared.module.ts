import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalPipe } from './pipes/total.pipe';




@NgModule({
  declarations: [
    EditComponent,
    TotalPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    EditComponent,
    TotalPipe,
  ]
})
export class SharedModule { }
