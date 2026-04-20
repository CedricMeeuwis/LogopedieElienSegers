import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
      img: 'assets/images/IMG_1778_1080.jpg',
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
      img: 'assets/images/IMG_1788_1080.jpg',
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

  constructor(private sanitizer: DomSanitizer){}

  getSwirlSvg(e: boolean)
  {
    if(e)
    {
      return this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 945 290" preserveAspectRatio="xMidYMid meet" version="1.0">
        <path transform="translate(-27 -147)" fill="currentColor" d="M 121.472656 355.351562 C 132.324219 359.25 142.398438 363.082031 152.664062 366.460938 C 162.929688 369.839844 171.117188 376.40625 178.980469 383.355469 C 184.570312 388.296875 186.386719 394.792969 183.789062 402.007812 C 182.097656 406.75 180.28125 411.625 177.875 416.042969 C 169.039062 432.15625 154.351562 437.421875 136.808594 432.613281 C 113.9375 426.375 106.917969 417.40625 102.953125 389.335938 C 102.109375 383.421875 102.824219 377.3125 102.824219 370.296875 C 98.859375 370.816406 94.765625 370.882812 90.867188 371.855469 C 75.597656 375.558594 61.109375 380.691406 48.957031 391.480469 C 44.734375 395.183594 38.753906 397.132812 33.359375 399.210938 C 29.789062 400.578125 28.746094 399.148438 29.980469 395.445312 C 33.035156 386.019531 39.144531 377.769531 47.332031 372.117188 C 64.875 359.835938 83.71875 351.320312 105.8125 352.363281 C 107.046875 352.425781 109.0625 351.128906 109.515625 349.957031 C 121.082031 322.40625 138.691406 299.339844 159.160156 277.699219 C 182.488281 253.007812 210.5625 233.1875 241.6875 219.480469 C 268.71875 207.457031 296.007812 194.589844 325.054688 188.351562 C 369.628906 178.800781 414.660156 178.152344 459.824219 185.753906 C 506.867188 193.617188 553.003906 205.246094 599.269531 216.292969 C 629.9375 223.636719 660.675781 231.238281 692.191406 233.058594 C 716.425781 234.488281 740.859375 234.097656 765.160156 233.320312 C 784.527344 232.734375 803.890625 231.109375 823.125 228.511719 C 846.191406 225.390625 867.375 215.773438 888.6875 207.066406 C 916.433594 195.824219 938.980469 178.085938 955.421875 152.875 C 957.175781 150.210938 959.0625 147.546875 962.636719 149.039062 C 966.207031 150.535156 965.820312 154.042969 965.105469 156.902344 C 963.15625 165.480469 958.929688 173.40625 952.886719 179.839844 C 935.863281 197.773438 917.148438 213.304688 893.820312 222.597656 C 871.078125 231.695312 848.726562 241.960938 824.226562 245.535156 C 808.375 247.808594 792.324219 249.5 776.273438 250.34375 C 752.621094 251.511719 728.902344 252.554688 705.183594 252.097656 C 670.160156 251.449219 636.113281 243.457031 602.128906 235.789062 C 564.179688 227.339844 526.425781 217.527344 488.347656 209.472656 C 457.09375 202.84375 425.511719 197.449219 393.21875 198.488281 C 370.476562 199.269531 347.148438 198.621094 325.507812 205.507812 C 281.0625 219.671875 235.644531 232.539062 197.566406 261.195312 C 167.414062 283.875 141.550781 310.710938 125.371094 345.539062 C 123.878906 348.65625 122.839844 351.972656 121.472656 355.351562 Z M 117.183594 373.089844 C 114.652344 383.488281 116.601562 392.714844 119.523438 401.875 C 123.421875 413.832031 134.664062 421.175781 147.921875 420.589844 C 159.421875 420.070312 166.179688 413.636719 169.363281 400.121094 C 169.429688 399.992188 169.558594 399.796875 169.492188 399.667969 C 168.777344 397.78125 168.648438 395.183594 167.285156 394.078125 C 152.859375 382.253906 135.507812 377.25 117.183594 373.089844 Z M 117.183594 373.089844 " fill-opacity="1" fill-rule="nonzero"/>
      </svg>`);
    }
    else{
      return this.sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 945 290" preserveAspectRatio="xMidYMid meet" version="1.0">
        <path fill="currentColor" d="M 844.484375 207.351562 C 833.632812 211.25 823.558594 215.082031 813.292969 218.460938 C 803.027344 221.839844 794.839844 228.40625 786.976562 235.355469 C 781.386719 240.296875 779.566406 246.792969 782.167969 254.007812 C 783.855469 258.75 785.675781 263.625 788.082031 268.042969 C 796.917969 284.15625 811.601562 289.421875 829.148438 284.613281 C 852.019531 278.375 859.039062 269.40625 863.003906 241.335938 C 863.847656 235.421875 863.132812 229.3125 863.132812 222.296875 C 867.097656 222.816406 871.191406 222.882812 875.089844 223.855469 C 890.359375 227.558594 904.847656 232.691406 917 243.480469 C 921.222656 247.183594 927.203125 249.132812 932.59375 251.210938 C 936.167969 252.578125 937.207031 251.148438 935.972656 247.445312 C 932.921875 238.019531 926.8125 229.769531 918.625 224.117188 C 901.082031 211.835938 882.234375 203.320312 860.144531 204.363281 C 858.910156 204.425781 856.894531 203.128906 856.4375 201.957031 C 844.871094 174.40625 827.261719 151.339844 806.792969 129.699219 C 783.46875 105.007812 755.394531 85.1875 724.269531 71.480469 C 697.238281 59.457031 669.949219 46.589844 640.902344 40.351562 C 596.324219 30.800781 551.292969 30.152344 506.132812 37.753906 C 459.089844 45.617188 412.953125 57.246094 366.6875 68.292969 C 336.015625 75.636719 305.28125 83.238281 273.765625 85.058594 C 249.53125 86.488281 225.097656 86.097656 200.792969 85.320312 C 181.429688 84.734375 162.066406 83.109375 142.832031 80.511719 C 119.765625 77.390625 98.582031 67.773438 77.269531 59.066406 C 49.523438 47.824219 26.972656 30.085938 10.535156 4.875 C 8.78125 2.210938 6.894531 -0.453125 3.320312 1.039062 C -0.253906 2.535156 0.136719 6.042969 0.851562 8.902344 C 2.800781 17.480469 7.027344 25.40625 13.070312 31.839844 C 30.09375 49.773438 48.808594 65.304688 72.136719 74.597656 C 94.878906 83.695312 117.230469 93.960938 141.726562 97.535156 C 157.582031 99.808594 173.632812 101.5 189.683594 102.34375 C 213.335938 103.511719 237.054688 104.554688 260.769531 104.097656 C 295.796875 103.449219 329.84375 95.457031 363.828125 87.789062 C 401.777344 79.339844 439.53125 69.527344 477.609375 61.472656 C 508.863281 54.84375 540.441406 49.449219 572.738281 50.488281 C 595.480469 51.269531 618.808594 50.621094 640.445312 57.507812 C 684.894531 71.671875 730.3125 84.539062 768.390625 113.195312 C 798.542969 135.875 824.402344 162.710938 840.585938 197.539062 C 842.078125 200.65625 843.117188 203.972656 844.484375 207.351562 Z M 848.773438 225.089844 C 851.304688 235.488281 849.355469 244.714844 846.433594 253.875 C 842.535156 265.832031 831.292969 273.175781 818.035156 272.589844 C 806.535156 272.070312 799.777344 265.636719 796.59375 252.121094 C 796.527344 251.992188 796.398438 251.796875 796.464844 251.667969 C 797.175781 249.78125 797.308594 247.183594 798.671875 246.078125 C 813.097656 234.253906 830.445312 229.25 848.773438 225.089844 Z M 848.773438 225.089844 " fill-opacity="1" fill-rule="nonzero"/>
      </svg>`);
    }
  }
}
