import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  contactForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    postcode: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    telephone: new FormControl('', Validators.required),
    disorder: new FormControl('', Validators.required),
    extra: new FormControl('', Validators.required),
  });

  onSubmit()
  {
    this.contactForm.markAllAsTouched();
    if(this.contactForm.valid)
    {
    }
    else{
      console.log("Invalid form");
    }
  }
}
