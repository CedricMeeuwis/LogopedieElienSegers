import { Component } from '@angular/core';

type offer = {
  img: string,
  title: string,
  questions: string[],
  color: string,
  link: string
}

@Component({
  selector: 'app-offer',
  standalone: false,
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  text_col_val: string = "col-7";
  img_col_val: string = "col-5";

  offers: offer[] = [
    {
      img: 'assets/images/IMG_1440_1080.jpg',
      title: 'Stotteren',
      questions: [
        'Herhaalt je kind regelmatig korte woorden of lettergrepen?',
        'Merk je dat er klanken worden verlengd of dat je kind vast lijkt te zitten?',
        'Merk je dat spreken soms gepaard gaat met spanning, frustratie of sterke emoties?',
        'Heb je het gevoel dat je kind minder spontaan praat dan voorheen?'
      ],
      color: 'primary',
      link: 'stotteren'
    },
    {
      img: 'assets/images/IMG_1617_1080.jpg',
      title: 'Preverbale logopedie',
      questions: [
        'Drinkt je baby moeilijk aan de borst of de fles?',
        'Verslikt je baby zich vaak?',
        'Loopt de overgang van borst- naar flesvoeding moeizaam?',
        'Weigert je peuter te eten of loopt de overgang naar vaste voeding moeizaam?',
        'Eet je peuter of kleuter zeer selectief of weinig gevarieerd?'
      ],
      color: 'warning',
      link: 'preverbaal'
    },
    {
      img: 'assets/images/IMG_1817_1080.jpg',
      title: 'Spraakontwikkeling en afwijkende mondgewoonten',
      questions: [
        'Is je kind soms moeilijk verstaanbaar?',
        'Heeft je kind problemen met het uitspreken van bepaalde klanken of klankcombinaties?',
        'Hoor je dat woorden anders uitgesproken worden dan verwacht?',
        'Merk je een verschil in spraakverstaanbaarheid met leeftijdsgenoten?',
        'Ademt je kind vaak door de mond of staat de mond regelmatig open?',
        'Merk je moeilijkheden met het slikken?',
        'Duwt de tong van je kind tegen de tanden?',
        'Blijven mondgewoonten zoals duimen of het gebruik van een fopspeen hardnekkig aanwezig?',
        'Of heb je het gevoel dat eten, drinken of spreken niet helemaal vlot verloopt?'
      ],
      color: 'dark',
      link: 'spraak'
    },
    {
      img: 'assets/images/IMG_1788_1080.jpg',
      title: 'Taalontwikkeling en taalstoornis',
      questions: [
        'Praat je kind weinig of anders dan leeftijdsgenoten?',
        'Lijkt je kind niet alles te begrijpen van eenvoudige opdrachten of instructies?',
        'Reageert je kind soms ongepast in bepaalde sociale interacties?',
        'Heeft je kind een beperkte woordenschat of woordvindingsproblemen?'
      ],
      color: 'warning',
      link: 'taal'
    },
    {
      img: 'assets/images/IMG_1448_1080.jpg',
      title: 'Leerstoornissen en leerproblemen',
      questions: [
        'Loopt het lezen, spellen of rekenen stroef?',
        'Heeft je kind problemen met het automatiseren van teken-klankkoppelingen, spellingregels of rekenstrategieën?',
        'Kost huiswerk veel energie?',
        'Of merk je dat je kind hard werkt, maar toch niet mee lijkt te kunnen?'
      ],
      color: 'secondary',
      link: 'leren'
    },
    {
      img: 'assets/images/IMG_1470_1080.jpg',
      title: 'IMPACT-training',
      questions: [
        'Maakt je kind weinig oogcontact of lijkt het moeilijk om contact te maken?',
        'Speelt je kind eerder alleen en is samen spelen niet vanzelfsprekend?',
        'Merk je dat je kind weinig initiatief neemt om te communiceren of moeilijk tot interactie komt?',
        'Loopt de taalontwikkeling niet vanzelfsprekend en wil je deze uitlokken op een speelse manier met aandacht voor de sociaal-communicatieve vaardigheden?'
      ],
      color: 'primary',
      link: 'impact'
    },
  ];
}
