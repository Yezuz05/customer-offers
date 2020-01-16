import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  offerId: string;
  offerName: string;
  isFetchingSubscriptions = false;
  subscriptions = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {
    const { offerId, offerName } = this.activatedRoute.snapshot.params;
    this.offerId = offerId;
    this.offerName = offerName.split('-').join(' ');
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.isFetchingSubscriptions = true;
    this.appService.getOfferSubscriptions(this.offerId).subscribe(
      (res: any) => {
        this.subscriptions = res.subscriptions;
        this.isFetchingSubscriptions = false;
      },
      error => {
        this.isFetchingSubscriptions = false;
      }
    );
  }
}
