import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-hippo',
  standalone: false,
  templateUrl: './hippo.component.html',
  styleUrl: './hippo.component.scss',
})
export class HippoComponent {
  constructor(private meta: Meta)
  {
    this.meta.updateTag({ name: 'keywords', content: 'Logopedie, Elien, Segers, Arendonk, Hippotherapie' }, 'name=keywords');
    this.meta.updateTag({ name: 'description', content: 'Hippotherapie is een ervaringsgerichte therapievorm waarbij het paard wordt ingezet om de ontwikkeling van het kind te ondersteunen.' }, 'name=description');
  }
}
