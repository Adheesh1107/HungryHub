import { Component, Input, OnInit } from '@angular/core';
import { apiConstants } from 'src/app/constants/api.constants';
import { OfferData } from 'src/app/models/offer.model';
import { FoodDetailsService } from 'src/app/services/food-service/food-details.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  offerDetails!: OfferData;
  @Input('offerDetails') set setOrderDetails(value: OfferData) {
    this.offerDetails = value;
    this.loadOrderImage(value.cloudinaryImageId);
  }

  constructor(private foodDetailsService: FoodDetailsService) {}

  ngOnInit(): void {
    console.log(this.offerDetails);
  }

  loadOrderImage(imageId: string) {
    return apiConstants.ORDER_IMAGE_BASE_URL + imageId;
  }

  // formatOrderStatus(orderStatus: string, orderDateTime: string) {
  //   let time = new Date(Date.parse(orderDateTime));
  //   let t = moment(time).format('D MMMM YYYY, h:mma');
  //   return capitalizeString(orderStatus) + 'on' + t;
  // }

  formatPrice(price: number) {
    return (Math.round(price * 100) / 100).toFixed(2);
  }
}
