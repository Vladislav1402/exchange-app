import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services';

export interface Currency {
  label: string,
  sublabel: string,
  image: string,
  id: string
}

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  currencies: Currency[] = [
    { label: 'UAH', sublabel: "Ukrainian Hryvnia", image: "/assets/images/ukrain.png", id: 'UAH' },
    { label: 'USD', sublabel: "US Dollar", image: "/assets/images/usa.png", id: "USD" },
    { label: 'EUR', sublabel: "Euro", image: "/assets/images/euro.png", id: "EUR" }
  ];
  rates: any = {};
  amount1: number = 0;
  amount2: number = 0;
  currency1: Currency = this.currencies[0]
  currency2: Currency = this.currencies[1]
  isCurrencieChanged1: boolean = false;
  isCurrencieChanged2: boolean = false;
  showCopyButton1: boolean = false;
  showCopyButton2: boolean = false;


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
    this.convertFirstFromAmount();
    this.convertSecondFromAmount();
    this.isCurrencieChanged1 = false;
    this.isCurrencieChanged2 = false;
  }

  convertFirstFromAmount(): void {
    const rate1 = this.rates[this.currency2?.id];
    const rate2 = this.rates[this.currency1?.id];
    if (rate1 && rate2 && !this.isCurrencieChanged1) {
      this.amount2 =
        (this.amount1 * rate1) / rate2 > 0
          ? +((this.amount1 * rate1) / rate2).toFixed(3)
          : 0;
    }
  }

  convertSecondFromAmount(): void {
    const rate1 = this.rates[this.currency2?.id];
    const rate2 = this.rates[this.currency1?.id];
    if (rate1 && rate2 && !this.isCurrencieChanged2) {
      this.amount1 =
        (this.amount2 * rate2) / rate1 > 0
          ? +((this.amount2 * rate2) / rate1).toFixed(3)
          : 0;
    }
  }

  onAmountFirstChange(): void {
    this.convertFirstFromAmount();
  }

  onAmountSecondChange(): void {
    this.convertSecondFromAmount();
  }

  onCurrencyFirstChange(): void {
    this.isCurrencieChanged1 = true;
    this.convertAll();
  }

  onCurrencySecondChange(): void {
    this.isCurrencieChanged2 = true;
    this.convertAll();
  }

  copyToClipboard(value: number, event: Event): void {
    event.preventDefault();
    navigator.clipboard.writeText(value.toString()).then(() => {
    })
  }

  onFocusInput(input: number) {
    if (input === 1) {
      this.showCopyButton1 = true;
    } else if (input === 2) {
      this.showCopyButton2 = true;
    }
  }

  onBlurInput(input: number) {
    if (input === 1) {
      this.showCopyButton1 = false;
    } else if (input === 2) {
      this.showCopyButton2 = false;
    }
  }
}
