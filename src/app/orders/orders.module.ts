import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PageDemoObsComponent } from './pages/page-demo-obs/page-demo-obs.component';
import { PageDemoSubjectComponent } from './pages/page-demo-subject/page-demo-subject.component';
import { FormOrderComponent } from './components/form-order/form-order.component';

@NgModule({
  declarations: [
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageListOrdersComponent,
    PageDemoObsComponent,
    PageDemoSubjectComponent,
    FormOrderComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
})
export class OrdersModule {}
