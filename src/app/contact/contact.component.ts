import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  disorders: string[] = [
    "Stotteren",
    "Lees- en/of spellingsproblemen",
    "Rekenproblemen",
    "Articulatieproblemen",
    "Taalproblemen",
    "Afwijkende mondgewoonten",
    "Gehoorstoornis",
    "Preverbale logopedie",
    "Impact training",
    "Andere"
  ];
}
