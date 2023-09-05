import { Component, OnInit } from '@angular/core';
import { OfferData } from 'src/app/models/offer.model';
import { FoodDetailsService } from 'src/app/services/food-service/food-details.service';

@Component({
  selector: 'app-offers-page',
  templateUrl: './offers-page.component.html',
  styleUrls: ['./offers-page.component.scss'],
})
export class OffersPageComponent implements OnInit {
  offersData!: OfferData[];
  errorMessage: string = '';
  showLoader = false;
  constructor(private foodDetailsService: FoodDetailsService) {}
  ngOnInit(): void {
    this.foodDetailsService.fetchOffers().subscribe(
      (response) => {
        this.offersData = response?.result;
        console.log(this.offersData);
      },
      (err) => {
        this.errorMessage = err;
        console.log(err);
      }
    );
  }
}
