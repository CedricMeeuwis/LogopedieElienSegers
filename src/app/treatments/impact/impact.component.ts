import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-impact',
  standalone: false,
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss',
})
export class ImpactComponent {
  myTreatment: TreatmentInfo = {
    title: 'ImPACT-training en JASPER',
    images: [
      {
        imageLink: 'assets/images/IMG_1470_1080.jpg',
        imageColor: 'primary'
      },
    ]
  }
}
