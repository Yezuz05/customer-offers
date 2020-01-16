import { Component, OnInit } from '@angular/core';
import { AppService } from './../../services/app.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offers = [];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getOffers();
  }

  getOffers() {
    this.appService.getOffers().subscribe((res: any) => {
      this.offers = res.offers;
    });
  }
}
