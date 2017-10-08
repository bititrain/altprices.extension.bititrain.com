import { Component, OnInit } from '@angular/core';
import { PricingService } from './services/coincap-prices.service'
import { Alt } from './models/alt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  alts: Alt[] = [];

  constructor(private coincap: PricingService) { }

  ngOnInit() {
    this.coincap.getAlts()
      .subscribe(
      alts => { this.alts = alts; },
      error => { console.log("Error happened" + error); },
      () => { console.log("the subscription is completed"); }
      );

  }

}
