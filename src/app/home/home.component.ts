import { Component } from '@angular/core';
import { Router } from '@angular/router';

type Step = {
  title: string,
  text: string
}

type Treatment = {
  title: string,
  color: string,
  img: string,
  link: string
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
      img: 'assets/images/IMG_1440_1080.jpg',
      link: 'stotteren'
    },
    {
      title: 'Preverbale logopedie',
      color: 'dark',
      img: 'assets/images/IMG_1617_1080.jpg',
      link: 'preverbaal'
    },
    {
      title: 'Spraakontwikkeling en afwijkende mondgewoonten',
      color: 'warning',
      img: 'assets/images/IMG_1817_1080.jpg',
      link: 'spraak'
    },
    {
      title: 'Taalontwikkeling en taalstoornis',
      color: 'dark',
      img: 'assets/images/IMG_1778_1080.jpg',
      link: 'taal'
    },
    {
      title: 'Leerstoornissen en leerproblemen',
      color: 'primary',
      img: 'assets/images/IMG_1788_1080.jpg',
      link: 'leren'
    },
    {
      title: 'IMPACT-training',
      color: 'warning',
      img: 'assets/images/IMG_1470_1080.jpg',
      link: 'impact'
    },
  ];

  constructor(private route: Router){}

  navigateTo(path:string){
    this.route.navigate([path]);
  }
}
