import { Component } from '@angular/core';

type Step = {
  title: string,
  text: string
}

type Treatment = {
  title: string,
  color: string,
  img: string
}


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent {
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

  treatments: Treatment[] = [
    {
      title: 'Stotteren',
      color: 'primary',
      img: 'assets/images/IMG_1576_1080.jpg'
    },
    {
      title: 'Preverbale logopedie',
      color: 'dark',
      img: 'assets/images/IMG_1617_1080.jpg'
    },
    {
      title: 'Spraakontwikkeling en afwijkende mondgewoonten',
      color: 'warning',
      img: 'assets/images/IMG_1436_1080.jpg'
    },
    {
      title: 'Taalontwikkeling en taalstoornis',
      color: 'dark',
      img: 'assets/images/IMG_1600_1080.jpg'
    },
    {
      title: 'Leerstoornissen en leerproblemen',
      color: 'primary',
      img: 'assets/images/IMG_1448_1080.jpg'
    },
    {
      title: 'IMPACT-training',
      color: 'warning',
      img: 'assets/images/IMG_1470_1080.jpg'
    },
  ]
}
