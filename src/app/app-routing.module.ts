import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OffersPageComponent } from './pages/offers-page/offers-page.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'offers',
    component: OffersPageComponent,
  },
  {
    path: 'restaurants',
    component: RestaurantPageComponent,
  },
  {
    path: 'orders',
    component: OrdersPageComponent,
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
