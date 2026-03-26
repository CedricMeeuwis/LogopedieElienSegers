import { Component, Input } from '@angular/core';

@Component({
  selector: 'brand-image',
  standalone: false,
  templateUrl: './brand-image.component.html',
  styleUrl: './brand-image.component.scss',
})
export class BrandImageComponent {
  @Input({required: true}) imgSrc!: string;
  @Input({required: true}) color!: string;
}
