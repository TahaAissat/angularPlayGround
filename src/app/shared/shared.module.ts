import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './components/edit/edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TotalPipe } from './pipes/total.pipe';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import { BtnComponent } from './components/btn/btn.component';
import { TotalCaPipe } from './pipes/total-ca.pipe';




@NgModule({
  declarations: [
    EditComponent,
    TotalPipe,
    AddBtnComponent,
    DeleteBtnComponent,
    BtnComponent,
    TotalCaPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditComponent,
    TotalPipe,
    TotalCaPipe,
    AddBtnComponent,
    DeleteBtnComponent,
    BtnComponent
  ]
})
export class SharedModule { }
