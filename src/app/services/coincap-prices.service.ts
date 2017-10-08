import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Alt } from '../models/alt'

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class PricingService {
  private apiUrl = 'http://coincap.io';

  private _alts: Alt[] = JSON.parse(localStorage.getItem('coincap.alts')) || [];
  private _last = parseInt(localStorage.getItem('coincap.last'), 10) || 0;

  constructor(public http: Http) { }

  public getAlts(): Observable<Alt[]> {
    const time = (new Date()).getTime();
    if (this._last + 300000 > time && this._alts.length > 0) {
      return Observable.of(this._alts);
    }

    return this.http.get(this.apiUrl + '/front')
      .map(res => res.json() || [])
      .map(coincapAlts => {
        const _alts = coincapAlts.map(coincapAlt =>
          new Alt(coincapAlt.long, coincapAlt.price, coincapAlt.short)
        );
        this._last = (new Date().getTime());
        this._alts = _alts;

        localStorage.setItem('coincap.alts', JSON.stringify(this._alts));
        localStorage.setItem('coincap.last', JSON.stringify(this._last));

        console.log("guardo estas ondas:", this._last, this._alts);
        return _alts;
      });
  }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   errMsg = (error || {}).message ? error.message : error.toString();
  //   console.error('errMsg', errMsg);
  //   return Observable.throw(errMsg);
  // }

}
