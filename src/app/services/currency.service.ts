import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable()
export class CurrencyService {
  constructor(private requestService: RequestService) { }

  getRates(): Observable<any> {
    return this.requestService.get("CURRENCY");
  }
}