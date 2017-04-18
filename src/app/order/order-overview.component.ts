import {Component, ViewEncapsulation} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {OrderService} from "../services/order-service";
import {Observable} from "rxjs";
import {AluecoOrder} from "./order";

@Component({
  selector: 'order-overview',
  templateUrl: 'order-overview.component.html',
  styleUrls: ['order-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderOverviewComponent {
  private orders = [];
  $orders: Observable<AluecoOrder[]>

  columns = [
    // we pass false to bypass the default
    // comparator function and use the event to sort
    { name: 'Material', comparator: false, prop: 'material.materialType'},
    { name: 'Quality', sortable: false, prop: 'material.quality'},
    { name: 'Location', sortable: false, prop: 'orderLocation.city'}
  ];


  constructor(private orderSerivce: OrderService) {
    this.$orders = orderSerivce.getAllOrders();

    this.$orders.subscribe((orders) => {
      console.log('orders', orders)
      this.orders = orders;
    })
  }
}
