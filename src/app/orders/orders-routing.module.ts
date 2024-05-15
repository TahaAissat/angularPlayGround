import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { PageDemoObsComponent } from './pages/page-demo-obs/page-demo-obs.component';
import { PageDemoSubjectComponent } from './pages/page-demo-subject/page-demo-subject.component';


const routes: Routes = [
    {path: '', component : PageListOrdersComponent },
    {path: 'add', component : PageAddOrderComponent}, 
    {path: 'edit/:id' , component : PageEditOrderComponent},
    {path:'demo-obs', component: PageDemoObsComponent},
    {path:'demo-subject', component:PageDemoSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}