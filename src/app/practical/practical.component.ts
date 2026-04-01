import { Component } from '@angular/core';

type Step = {
  title: string,
  text: string
}

@Component({
  selector: 'app-practical',
  standalone: false,
  templateUrl: './practical.component.html',
  styleUrl: './practical.component.scss',
})
export class PracticalComponent {
  steps: Step[] = [
    {
      title: "Contact opnemen",
      text: "Neem contact op om jouw vraag of bezorgdheid te bespreken. Samen bekijken we wat je nodig hebt en plannen we een eerste afspraak in."
    },
    {
      title: "Intakegesprek",
      text: "Tijdens het intakegesprek maken we uitgebreid kennis. Ik luister naar jouw verhaal, bespreek de hulpvraag en beantwoord al je vragen."
    },
    {
      title: "Onderzoek",
      text: "Indien nodig wordt een onderzoek ingepland om een duidelijk beeld te krijgen van de moeilijkheden en de sterktes."
    },
    {
      title: "Adviesgesprek",
      text: "Na het onderzoek bespreken we de resultaten en stellen we een persoonlijk behandelplan op, afgestemd op jouw noden en/of de noden van jouw kind."
    },
    {
      title: "Start therapie",
      text: "Zodra alles administratief in orde is voor de terugbetaling, gaan we samen aan de slag met de therapie!"
    }
  ];
}
