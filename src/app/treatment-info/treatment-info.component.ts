import { Component, Input } from '@angular/core';

export type TreatmentInfo = {
  title: string,
  images: {
    imageLink: string,
    imageColor: string
  }[]
}

@Component({
  selector: 'treatment-info',
  standalone: false,
  templateUrl: './treatment-info.component.html',
  styleUrl: './treatment-info.component.scss',
})
export class TreatmentInfoComponent {
  @Input() treatmentInfo!: TreatmentInfo;
}
