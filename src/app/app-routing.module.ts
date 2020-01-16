import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: '', redirectTo: 'offers', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent },
  {
    path: 'subscriptions/:offerName/:offerId',
    component: SubscriptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
