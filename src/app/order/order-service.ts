import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {AluecoOrder} from "./order";
import {Observable} from "rxjs";

@Injectable()
export class OrderService {
  private $orders: Observable<AluecoOrder[]>;

  constructor(private af: AngularFire) {
    this.$orders = af.database.list('orders');
  }

  getAllOrders() : Observable<AluecoOrder[]> {
    return this.$orders;
  }
}
