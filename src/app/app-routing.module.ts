import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Logopedie Segers'
  },
  {
    path: 'over-mij',
    component: AboutComponent,
    title: 'Over mij'
  },
  {
    path: 'aanbod',
    component: OfferComponent,
    title: 'Aanbod'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
