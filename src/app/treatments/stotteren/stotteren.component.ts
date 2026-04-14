import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-stotteren',
  standalone: false,
  templateUrl: './stotteren.component.html',
  styleUrl: './stotteren.component.scss',
})
export class StotterenComponent {
  myTreatment: TreatmentInfo = {
    title: 'Stotteren',
    parts: [
      {
        content: `<p>Stotteren is meer dan onvloeiend spreken. Het raakt aan emoties, gedachten en hoe iemand zichzelf ervaart in communicatie. Het kan een grote impact hebben op het dagelijks functioneren en vraagt een individuele en veelzijdige aanpak op maat.</p>
        <p>Ik specialiseerde me voor stotteren aan de Universiteit Antwerpen en begeleid zowel kleuters, kinderen, jongeren als volwassenen.</p>
        <h4 class="text-primary">Normale onvloeiendheden of stotteren?</h4>
        <p>Binnen de onvloeiendheden onderscheiden we normale en niet-normale onvloeiendheden. Peuters en kleuters herhalen regelmatig woorden en delen van zinnen, pauzeren, verspreken zich, aarzelen, hebben woordvindingsproblemen of beslissen plots om de zin anders te formuleren of om een ander woord te kiezen. Deze normale onvloeiendheden geven de peuter of kleuter ruimte en tijd om een uiting te (her)formuleren en om de aandacht van de luisteraar vast te houden. Controleverlies is hier niet aan de orde.</p>
        <p>Onder de niet-normale onvloeiendheden (stotteren) verstaan we woordherhalingen, klank- of syllabeherhalingen, verlengingen, blokkeringen en/of afgebroken woorden. Deze onvloeiendheden gaan gepaard met controleverlies, waardoor taal en spraak in continuïteit en snelheid worden onderbroken</p>`,
        image: 'assets/images/IMG_1440_1080.jpg',
        imageColor: 'primary'
      },
      {
        content: `<h4 class="text-primary">Spontaan herstel</h4>
        <p>Bij sommige jonge kinderen die beginnen stotteren treedt er spontaan herstel op zonder dat stottertherapie nodig is. Dit gebeurt meestal binnen een periode van 3 maanden tot 1 jaar na het ontstaan van het stotteren. Spontaan herstel komt vaker voor bij meisjes en bij kinderen met een mildere vorm van stotteren. De omgeving speelt hier een cruciale rol. Om die reden wordt er bij jonge kinderen sterk ingezet op ouderbegeleiding.</p>
        <h4 class="text-primary">Wanneer behandelen?</h4>
        <p>Wanneer je onvloeiendheden in het spreken opmerkt, kom je best langs voor een intakegesprek. Tijdens dat gesprek zal je geïnformeerd worden over het stotteren, bespreken we of een uitgebreid stotteronderzoek nodig is en worden al jouw vragen beantwoord.</p>
        <p>Na het vaststellen van de stotterernst kan een behandeling opgestart worden. Bij peuters en kleuters is er de keuze tussen afwachten of te starten met een behandeling. We leggen de informatie samen over de aanvang, de evolutie, de kenmerken van het stotteren en de kans op spontaan herstel om deze keuze te maken.</p>`,
        image: 'assets/images/IMG_1765_1080.jpg',
        imageColor: 'secondary'
      },
      {
        content: `<h4 class="text-primary">Stottertherapie</h4>
        <p>Stottertherapie is gebaseerd op de sociaal cognitieve gedragstherapie waarbij voor jonge kinderen ook een oudercursus wordt aangeboden.</p>
        <p>Bij jonge kinderen die stotteren focussen we voornamelijk op de factoren die het stotteren beïnvloeden (uitlokkende factoren). Op een speelse en veilige manier werken we aan emotieregulatie, het omgaan met spanning en het versterken van communicatieve vaardigheden.</p>
        <p>Bij oudere kinderen, jongeren en volwassenen wordt de begeleiding verder uitgebreid met onder andere probleemoplossend denken, het leren herkennen en ombuigen van gedachten, het versterken van het zelfvertrouwen in spreken en spreektechnieken.</p>`,
        image: 'assets/images/IMG_1806_1080.jpg',
        imageColor: 'dark'
      },
    ]
  }
}
