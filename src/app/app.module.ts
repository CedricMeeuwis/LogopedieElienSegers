import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LogopedieLogoComponent } from './components/logopedie-logo/logopedie-logo.component';
import { OfferComponent } from './offer/offer.component';
import { FooterComponent } from './footer/footer.component';
import { BrandImageComponent } from './components/brand-image/brand-image.component';
import { PracticalComponent } from './practical/practical.component';
import { TreatmentInfoComponent } from './treatment-info/treatment-info.component';
import { StotterenComponent } from './treatments/stotteren/stotteren.component';
import { PreverbaalComponent } from './treatments/preverbaal/preverbaal.component';
import { SpraakComponent } from './treatments/spraak/spraak.component';
import { TaalComponent } from './treatments/taal/taal.component';
import { LerenComponent } from './treatments/leren/leren.component';
import { ImpactComponent } from './treatments/impact/impact.component';
import { HippoComponent } from './hippo/hippo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LogopedieLogoComponent,
    OfferComponent,
    FooterComponent,
    BrandImageComponent,
    PracticalComponent,
    TreatmentInfoComponent,
    StotterenComponent,
    PreverbaalComponent,
    SpraakComponent,
    TaalComponent,
    LerenComponent,
    ImpactComponent,
    HippoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
