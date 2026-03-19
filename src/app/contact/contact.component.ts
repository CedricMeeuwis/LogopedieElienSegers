import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit(contactForm: NgForm)
  {
    if(contactForm.valid)
    {
      console.log(contactForm);
    }
    else{
      console.log("Not valid");
    }
  }
}
