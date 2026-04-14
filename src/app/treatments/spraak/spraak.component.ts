import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';

@Component({
  selector: 'app-spraak',
  standalone: false,
  templateUrl: './spraak.component.html',
  styleUrl: './spraak.component.scss',
})
export class SpraakComponent {
  myTreatment: TreatmentInfo = {
    title: 'Spraak en afwijkende mondgewoonten',
    parts: [
      {
        content: `<p>Binnen deze begeleiding maak ik een onderscheid tussen spraakproblemen en afwijkende mondgewoonten of oromyofunctionele problemen.</p>
        <h4 class="text-primary">Spraakproblemen of -stoornis</h4>
        <p>Binnen spraakproblemen maken we een onderscheid tussen fonetische en fonologische problemen.</p>
        <p>Bij een fonetisch probleem worden bepaalde klanken nog niet correct gevormd. Het gaat hierbij vaak om klanken zoals [s], [l], [r] en [sch].</p>
        <p>Bij fonologische problemen kunnen kinderen de spraakklanken correct uitspreken, maar lukt het nog niet om ze juist toe te passen in woorden. Hierdoor kan hun spraak minder goed verstaanbaar zijn voor de omgeving. Zo kan bijvoorbeeld “spin” uitgesproken worden als “pin”, “paraplu” als “papu” of “koek” als “toet”.</p>
        <p>Deze moeilijkheden zijn sterk leeftijdsgebonden en verschillen van kind tot kind. Daarom is een gericht fonologisch onderzoek belangrijk om de juiste aanpak te bepalen.</p>`,
        image: 'assets/images/IMG_1617_1080.jpg',
        imageColor: 'primary'
      },
      {
        content: `<p>In mijn therapie werk ik voornamelijk vanuit de PROMPT-methodiek en principes van motorisch leren. Deze aanpak helpt kinderen om spraakbewegingen gerichter en efficiënter aan te leren, met aandacht voor een duidelijke en vlottere verstaanbaarheid.</p>
        <h4 class="text-primary">Afwijkende mondgewoonten of oromyofunctionele problemen</h4>
        <p>Bij afwijkende mondgewoonten zien we regelmatig dat de tongpositie niet optimaal is, zowel in rust, tijdens het spreken als bij het slikken. Vaak hangt dit samen met openmondgedrag, wat een goede neusademhaling bemoeilijkt.</p>
        <p>Op lange termijn kunnen deze factoren een invloed hebben op de stand van de tanden en de kaakontwikkeling. Daarom werken we, indien nodig, nauw samen met een orthodontist of tandarts.</p>
        <p>De therapie is doelgericht en praktisch, maar vraagt ook dagelijkse oefening thuis om tot een duurzaam en positief resultaat te komen.</p>`,
        image: 'assets/images/IMG_1617_1080.jpg',
        imageColor: 'info'
      },
    ]
  }
}
