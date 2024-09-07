import { Component } from '@angular/core';
import { CurrencyService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  rates: any = {};
  amount1: number = 0;
  amount2: number = 0;
  currency1: string = 'UAH';
  currency2: string = 'USD';
  isCurrencieChanged1 = false;
  isCurrencieChanged2 = false;
  currencies = ['UAH', 'USD', 'EUR'];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getRates();
  }

  getRates(): void {
    this.currencyService.getRates().subscribe(data => {
      this.rates = data.conversion_rates;
      this.convertAll();
    });
  }

  convertAll(): void {
    this.convertFromAmount1();
    this.convertFromAmount2();
    this.isCurrencieChanged1 = false;
    this.isCurrencieChanged2 = false;
  }

  convertFromAmount1(): void {
    const rate1 = this.rates[this.currency2];
    const rate2 = this.rates[this.currency1];
    if (rate1 && rate2 && !this.isCurrencieChanged1) {
      this.amount2 =
        (this.amount1 * rate1) / rate2 > 0
          ? +((this.amount1 * rate1) / rate2).toFixed(3)
          : 0;
    }
  }

  convertFromAmount2(): void {
    const rate1 = this.rates[this.currency2];
    const rate2 = this.rates[this.currency1];
    if (rate1 && rate2 && !this.isCurrencieChanged2) {
      this.amount1 =
        (this.amount2 * rate2) / rate1 > 0
          ? +((this.amount2 * rate2) / rate1).toFixed(3)
          : 0;
    }
  }

  onAmount1Change(): void {
    this.convertFromAmount1();
  }

  onAmount2Change(): void {
    this.convertFromAmount2();
  }

  onCurrency1Change(): void {
    this.isCurrencieChanged1 = true;
    this.convertAll();
  }

  onCurrency2Change(): void {
    this.isCurrencieChanged2 = true;
    this.convertAll();
  }
}
