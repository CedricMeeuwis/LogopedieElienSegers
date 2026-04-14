import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-impact',
  standalone: false,
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.scss',
})
export class ImpactComponent {
  myTreatment: TreatmentInfo = {
    title: 'Preverbale logopedie',
    parts: [
      {
        content: `<p>De voorbije jaren verdiepte ik me intensief in preverbale logopedie en volgde ik hiervoor een opleiding aan de Arteveldehogeschool in Gent. Prelogopedie is een specifieke tak binnen de logopedie die jonge kinderen behandelt met voedings- of mondmotorische problemen, maar ook met problemen zoals een vertraagde taal- en spraakontwikkeling. (bij ‘verdraagde taalontwikkeling’ mogen er twee links komen naar de pagina van taalontwikkeling en taalstoornis - spraakontwikkeling)</p>
        <p>Eten en drinken lijkt vanzelfsprekend, maar dat is het niet voor elk kind. In de preverbale fase help ik baby’s en peuters die moeilijkheden ervaren met borst- of flesvoeding, de overgang naar vaste voeding, lepelvoeding of kauwen. Soms ligt er een medische of neurologische oorzaak aan de basis. In de begeleiding staat het kind centraal: we zoeken samen met de ouders naar haalbare en warme oplossingen, zonder druk of dwang. Ook bij selectief eten, een beperkte variatie in voeding of hardnekkige voedingsproblemen denk ik graag mee.</p>
        <p>Daarnaast heb ik een bijzondere interesse in specifieke eetproblemen bij kinderen met autisme en ARFID. Samen kijken we naar wat jouw kind nodig heeft om eten en drinken opnieuw veilig, voorspelbaar, aangenaam en haalbaar te maken.</p>`,
        image: 'assets/images/IMG_1617_1080.jpg',
        imageColor: 'primary'
      },
    ]
  }
}
