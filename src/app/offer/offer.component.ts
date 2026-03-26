import { Component } from '@angular/core';

type offer = {
  img: string,
  title: string,
  text: string,
  color: string
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
      img: 'assets/images/IMG_1576_1080.jpg',
      title: 'Stotteren',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'primary'
    },
    {
      img: 'assets/images/IMG_1617_1080.jpg',
      title: 'Preverbale logopedie',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'warning'
    },
    {
      img: 'assets/images/IMG_1436_1080.jpg',
      title: 'Spraakontwikkeling en afwijkende mondgewoonten',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'dark'
    },
    {
      img: 'assets/images/IMG_1600_1080.jpg',
      title: 'Taalontwikkeling en taalstoornis',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'warning'
    },
    {
      img: 'assets/images/IMG_1448_1080.jpg',
      title: 'Leerstoornissen en leerproblemen',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'secondary'
    },
    {
      img: 'assets/images/IMG_1470_1080.jpg',
      title: 'IMPACT-training',
      text: 'Lorem ipsum dolor sit amet. Qui dolores temporibus sed vitae nulla ea sequi adipisci. Aut eveniet autem in possimus ducimus sed dicta doloremque est asperiores harum.',
      color: 'primary'
    },
  ];
}
