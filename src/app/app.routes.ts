import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AluecoOrderFormComponent} from "./order/alueco-order-form.component";
import {OrderOverviewComponent} from "./order/order-overview.component";
export const appRoutes: Routes = [
  {
    path: '',
    component: OrderOverviewComponent
  },
  {
    path: 'containers/overzicht',
    component: OrderOverviewComponent
  },
  {
    path: 'containers/bestellen',
    component: AluecoOrderFormComponent,
  },
  // { path: '**', component: PageNotFoundComponent }
];
