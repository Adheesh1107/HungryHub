import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { apiConstants } from 'src/app/constants/api.constants';
import { OrderData } from 'src/app/models/order.model';
import { FoodDetailsService } from 'src/app/services/food-service/food-details.service';
import { capitalizeString } from 'src/app/utils/stringFormatter';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderDetails!: OrderData;
  @Input('orderDetails') set setOrderDetails(value: OrderData) {
    this.orderDetails = value;
    this.loadOrderImage(value.imageId);
  }

  constructor(private foodDetailsService: FoodDetailsService) {}

  ngOnInit(): void {
    console.log(this.orderDetails);
  }

  loadOrderImage(imageId: string) {
    return apiConstants.ORDER_IMAGE_BASE_URL + imageId;
  }

  formatOrderStatus(orderStatus: string, orderDateTime: string) {
    let time = new Date(Date.parse(orderDateTime));
    let t = moment(time).format('D MMMM YYYY, h:mma');
    return capitalizeString(orderStatus) + ' on ' + capitalizeString(t);
  }
}
