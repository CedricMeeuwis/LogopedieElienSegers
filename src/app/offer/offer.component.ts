import { Component } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: false,
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  text_col_val: string = "col-7";
  img_col_val: string = "col-5";
}
