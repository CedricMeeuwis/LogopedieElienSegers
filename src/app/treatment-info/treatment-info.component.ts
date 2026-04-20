import { Component, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

export type TreatmentInfo = {
  title: string,
  images: {
    imageLink?: string,
    imageColor?: string
    svg?: SafeHtml
    svgPadding?: string,
    svgColor?: string
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
