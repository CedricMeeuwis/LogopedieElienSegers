import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  treatments: string[] = [
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
    treatment: new FormControl('', Validators.required),
    extra: new FormControl('', Validators.required),
  });

  private http = inject(HttpClient);

  onSubmit()
  {
    this.contactForm.markAllAsTouched();
    if(this.contactForm.valid)
    {
      let current = Date.now();
      let datePipe = new DatePipe('en-BE');
      this.http.post('https://formspree.io/f/xpqybwna',
        {
          title: 'Indiening ' + this.contactForm.get('firstname')?.value + ' ' + this.contactForm.get('name')?.value + ' - ' + datePipe.transform(current, 'd/MM/y H:mm'),
          message:
          'Voornaam: ' + this.contactForm.get('firstname')?.value + '\n' +
          'Naam: ' + this.contactForm.get('name')?.value + '\n' +
          'Straat: ' + this.contactForm.get('street')?.value + '\n' +
          'Postcode: ' + this.contactForm.get('postcode')?.value + '\n' +
          'Email: ' + this.contactForm.get('email')?.value + '\n' +
          'Telefoon: ' + this.contactForm.get('telephone')?.value + '\n' +
          'Behandeling: ' + this.contactForm.get('treatment')?.value + '\n' +
          'Vraag/opmerking: ' + this.contactForm.get('extra')?.value
        }).subscribe(
          response =>
          {
            console.log(response);
          }
        );
    }
    else{
      console.log("Invalid form");
    }
  }

  fieldIsError(fieldName: string)
  {
    let field = this.contactForm.get(fieldName);
    return field?.touched && field.hasError('required');
  }
}
