import { Component, inject } from '@angular/core';
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

  private http = inject(HttpClient);

  onSubmit()
  {
    this.contactForm.markAllAsTouched();
    if(this.contactForm.valid)
    {
      /*this.http.post('https://formspree.io/f/xpqybwna',
        {
          email: 'cedric.meeuwis@hotmail.com',
          title: 'Indiening ' + this.contactForm.get('firstname') + ' ' + this.contactForm.get('name'),
          message: ''

        }).subscribe(
          response =>
          {
            console.log(response);
          }
        );*/
        console.log("Sent form");
    }
    else{
      console.log("Invalid form");
    }
  }

  fieldIsError(fieldName: string)
  {
    let field = this.contactForm.get('fieldName')
    return field?.touched && field.hasError('required');
  }
}
