import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
  steps: string[] = [
    "Intakegesprek",
    "Onderzoek",
    "Adviesgesprek",
    "Voorschrift",
    "Dossier"
  ];
}
