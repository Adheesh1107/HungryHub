import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OfferComponent } from './components/offer/offer.component';
import { OrderItemComponent } from './components/order/order-item/order-item.component';
import { OrderComponent } from './components/order/order.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    OffersPageComponent,
    OrdersPageComponent,
    RestaurantPageComponent,
    OrderComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    OrderItemComponent,
    OfferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
