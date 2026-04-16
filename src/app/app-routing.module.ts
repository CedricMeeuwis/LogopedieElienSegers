import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OfferComponent } from './offer/offer.component';
import { PracticalComponent } from './practical/practical.component';
import { StotterenComponent } from './treatments/stotteren/stotteren.component';
import { PreverbaalComponent } from './treatments/preverbaal/preverbaal.component';
import { SpraakComponent } from './treatments/spraak/spraak.component';
import { TaalComponent } from './treatments/taal/taal.component';
import { LerenComponent } from './treatments/leren/leren.component';
import { ImpactComponent } from './treatments/impact/impact.component';
import { HippoComponent } from './hippo/hippo.component';

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
    path: 'behandelingen/info/stotteren',
    component: StotterenComponent,
    title: 'Logopedie Segers ● Stotteren'
  },
  {
    path: 'behandelingen/info/preverbaal',
    component: PreverbaalComponent,
    title: 'Logopedie Segers ● Preverbaal'
  },
  {
    path: 'behandelingen/info/spraak',
    component: SpraakComponent,
    title: 'Logopedie Segers ● Spraak'
  },
  {
    path: 'behandelingen/info/taal',
    component: TaalComponent,
    title: 'Logopedie Segers ● Taal'
  },
  {
    path: 'behandelingen/info/leren',
    component: LerenComponent,
    title: 'Logopedie Segers ● Leren'
  },
  {
    path: 'behandelingen/info/impact',
    component: ImpactComponent,
    title: 'Logopedie Segers ● IMPACT'
  },
  {
    path: 'hippo',
    component: HippoComponent,
    title: 'Logopedie Segers ● Hippotherapie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
