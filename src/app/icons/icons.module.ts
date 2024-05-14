import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';
import { IconCloseComponent } from './components/icon-close/icon-close.component';



@NgModule({
  declarations: [
    IconNavComponent,
    IconCloseComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports : [
    IconCloseComponent,
    IconNavComponent
  ]
})
export class IconsModule { }
