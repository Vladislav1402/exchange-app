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
import { CurrencyComponent } from './components';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DropdownModule,
        ChartModule,
        ProgressSpinnerModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        DropdownModule,
        TooltipModule
    ],
    exports: [],
    declarations: [
        AppComponent,
        CurrencyComponent
    ],
    providers: [
        RequestService,
        CurrencyService
    ],
    bootstrap: [AppComponent],

})
export class AppModule { }
