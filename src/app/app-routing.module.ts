import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IpComponent } from './ip/ip.component';
import { PrimeComponent } from './prime/prime.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prime', component: PrimeComponent },
  { path: 'ip', component: IpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule],
})
export class AppRoutingModule {}
