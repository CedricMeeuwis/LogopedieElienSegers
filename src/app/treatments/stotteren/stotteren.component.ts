import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-stotteren',
  standalone: false,
  templateUrl: './stotteren.component.html',
  styleUrl: './stotteren.component.scss',
})
export class StotterenComponent {
  myTreatment: TreatmentInfo = {
    title: 'Stotteren',
    images: [
      {
        imageLink: 'assets/images/IMG_1440_1080.jpg',
        imageColor: 'primary'
      },
      {
        imageLink: 'assets/images/IMG_1765_1080.jpg',
        imageColor: 'secondary'
      },
      {
        imageLink: 'assets/images/IMG_1806_1080.jpg',
        imageColor: 'dark'
      },
    ]
  }
}
