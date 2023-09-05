import { Component, Input, OnInit } from '@angular/core';
import { OrderData, OrderItem } from 'src/app/models/order.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  orderItemDetails!: OrderItem[];
  @Input('orderItemDetails') set setOrderItemDetails(value: OrderItem[]) {
    this.orderItemDetails = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
