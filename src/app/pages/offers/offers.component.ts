import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers = [];
  isFetchingOffers = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.isFetchingOffers = true;
    this.appService.getOffers().subscribe(
      (res: any) => {
        this.isFetchingOffers = false;
        this.offers = res.offers;
      },
      error => {
        this.isFetchingOffers = false;
      }
    );
  }
}
