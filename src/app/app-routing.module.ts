import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import { PracticalComponent } from './practical/practical.component';
import { TreatmentInfoComponent } from './treatment-info/treatment-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Logopedie Segers'
  },
  {
    path: 'over-mij',
    component: AboutComponent,
    title: 'Logopedie Segers ● Over mij'
  },
  {
    path: 'behandelingen',
    component: OfferComponent,
    title: 'Logopedie Segers ● Behandelingen'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Logopedie Segers ● Contact'
  },
  {
    path: 'praktisch',
    component: PracticalComponent,
    title: 'Logopedie Segers ● Praktisch'
  },
  {
    path: 'behandelingen/info/:id',
    component: TreatmentInfoComponent,
    title: 'Logopedie Segers ● Behandelingen'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
