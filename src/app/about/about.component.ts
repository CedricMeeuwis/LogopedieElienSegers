import { Component } from '@angular/core';

@Component({
  selector: 'about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  offers: string[] = [
    "Stotteren",
    "Ouderbegeleiding voor ouders van stotterende kinderen",
    "Articulatieproblemen",
    "Taalproblemen",
    "Afwijkende mondgewoonten (OMFT)",
    "Lees- en spellingsproblemen",
    "Rekenproblemen",
    "Preverbale logopedie",
    "Het ImPACT programma, trainen van sociaalcommunicatieve vaardigheden bij kinderen met het autismespectrumstoornis"
  ];

  degrees: string[] = [
    "Bachelor lager onderwijs, Thomas More Turnhout (2013)",
    "Bachelor in de logopedie, Thomas More Antwerpen (2023)",
    "De cyclische aanpak van Hodson & Paden: onderzoek en behandeling van onverstaanbare kinderen, Thomas More Antwerpen (2023)",
    "Praktische cursus technisch lezen, KWeC (2023)",
    "Praktische cursus spelling, KWeC (2023)",
    "De spraakbooster: op weg naar meer succes in je spraaktherapie, Sterk Academy (2023)",
    "Logopedie en tandheelkunde: oromyofunctionele therapie, Peter Helderop, Hasselt (2023)",
    "RekenTrapperS in 1e, 2e en 3e leerjaar, Eureka Leuven (2024)",
    "RekenTrapperS in 4e, 5e en 6e leerjaar, Eureka Leuven (2024)",
    "Dyscalculie in het secundair onderwijs, Eureka Leuven (2024)",
    "Executieve vaardigheden begrijpen en aanpakken, Vicki Tops 2the. (2024)",
    "Basiscursus PROMPT, Sig (2024)",
    "Specialisatieopleiding stottertherapie, (CIOOS, 2024)",
    "Project ImPACT - Trainen van sociaal-communicatieve vaardigheden bij kinderen met een autismespectrumstoornis, Sig (2024)",
    "Intensieve vorming eet- en drinkproblemen bij baby’s en jonge kinderen, Artevelde Hogeschool Gent (januari 2025)",
  ];
}
