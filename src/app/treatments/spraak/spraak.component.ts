import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-spraak',
  standalone: false,
  templateUrl: './spraak.component.html',
  styleUrl: './spraak.component.scss',
})
export class SpraakComponent {
  myTreatment: TreatmentInfo = {
    title: 'Spraak en afwijkende mondgewoonten',
    images: [
      {
        imageLink: 'assets/images/IMG_1817_1080.jpg',
        imageColor: 'primary'
      },
      {
        imageLink: 'assets/images/IMG_1800_1080.jpg',
        imageColor: 'warning'
      },
    ]
  }
}
