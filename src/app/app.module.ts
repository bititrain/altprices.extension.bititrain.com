import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AltComponent } from './partials/alt/alt.component';
import { PricingService } from './services/coincap-prices.service';

@NgModule({
  declarations: [
    AppComponent,
    AltComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PricingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
