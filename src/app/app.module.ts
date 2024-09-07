import { NgModule } from '@angular/core';
import { CurrencyService, RequestService } from './services';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DropdownModule,
        ChartModule,
        ProgressSpinnerModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        AppComponent
    ],
    providers: [
        RequestService,
        CurrencyService
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
