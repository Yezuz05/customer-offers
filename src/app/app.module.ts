import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { OffersComponent } from './pages/offers/offers.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

@NgModule({
  declarations: [AppComponent, AvatarComponent, OffersComponent, SubscriptionsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
