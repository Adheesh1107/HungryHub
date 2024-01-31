import { Component, OnInit } from '@angular/core';
import { OrderData, OrderResponseData } from 'src/app/models/order.model';
import { FoodDetailsService } from 'src/app/services/food-service/food-details.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss'],
})
export class OrdersPageComponent implements OnInit {
  ordersData!: OrderData[];
  errorMessage: string = '';
  showLoader = false;
  constructor(private _foodDetailsService: FoodDetailsService) {}
  ngOnInit(): void {
    this.showLoader = true;
    this._foodDetailsService.fetchOrders().subscribe(
      (orderDetails) => {
        this.ordersData = orderDetails.orders;
        // console.log(orderDetails);
        this.showLoader = false;
      },
      (error) => {
        this.errorMessage = error;
        this.showLoader = false;
      }
    );
  }
}
