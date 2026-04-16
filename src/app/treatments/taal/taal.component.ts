import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-taal',
  standalone: false,
  templateUrl: './taal.component.html',
  styleUrl: './taal.component.scss',
})
export class TaalComponent {
  myTreatment: TreatmentInfo = {
    title: 'Vertraagde taalontwikkeling en taalstoornis',
    images: [
      {
        imageLink: 'assets/images/IMG_1788_1080.jpg',
        imageColor: 'primary'
      },
    ]
  }
}
