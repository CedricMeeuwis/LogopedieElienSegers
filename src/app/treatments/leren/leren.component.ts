import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-leren',
  standalone: false,
  templateUrl: './leren.component.html',
  styleUrl: './leren.component.scss',
})
export class LerenComponent {
  myTreatment: TreatmentInfo = {
    title: 'Leerproblemen en -stoornissen',
    images: [
      {
        imageLink: 'assets/images/IMG_1448_1080.jpg',
        imageColor: 'primary'
      },
      {
        imageLink: 'assets/images/IMG_1793_1080.jpg',
        imageColor: 'dark'
      }
    ]
  }
}
