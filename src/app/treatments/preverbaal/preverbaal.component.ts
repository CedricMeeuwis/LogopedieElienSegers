import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-preverbaal',
  standalone: false,
  templateUrl: './preverbaal.component.html',
  styleUrl: './preverbaal.component.scss',
})
export class PreverbaalComponent {
  myTreatment: TreatmentInfo = {
    title: 'Preverbale logopedie',
    images: [
      {
        imageLink: 'assets/images/IMG_1617_1080.jpg',
        imageColor: 'primary'
      },
    ]
  }
}
