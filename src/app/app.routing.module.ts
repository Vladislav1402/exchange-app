import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/currency',
    pathMatch: 'full'
  },
  {
    path: "currency",
    component: CurrencyComponent
  },
  {
    path: '**',
    redirectTo: '/currency'
  }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
export class AppRoutingModule {}