import { Component, Input } from '@angular/core';

@Component({
  selector: 'brand-image',
  standalone: false,
  templateUrl: './brand-image.component.html',
  styleUrl: './brand-image.component.scss',
})
export class BrandImageComponent {
  @Input({required: true}) imgSrc!: string | undefined;
  _color!: string;
  @Input({required: true}) set color(value: string | undefined)
  {
    this._color = value ?? "";
    if(this._color == "warning-drk") this._color = "warning";
  };
}
