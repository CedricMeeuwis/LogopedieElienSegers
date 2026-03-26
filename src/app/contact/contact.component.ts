import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import emailjs, {type EmailJSResponseStatus } from '@emailjs/browser';

interface formPayload {
  firstname: string | undefined | null,
  name: string | undefined | null,
  street: string | undefined | null,
  postcode: string | undefined | null,
  email: string | undefined | null,
  telephone: string | undefined | null,
  treatment: string | undefined | null,
  extra: string | undefined | null,
  date: string | undefined | null
}

@Component({
  selector: 'contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  treatments: string[] = [
    "Stotteren",
    "Preverbale logopedie",
    "Spraakontwikkeling en afwijkende mondgewoonten",
    "Taalontwikkeling en taalstoornis",
    "Leerstoornissen en leerproblemen",
    "IMPACT-training"
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

  onSubmit()
  {
    this.contactForm.markAllAsTouched();
    if(this.contactForm.valid)
    {
      let datePipe = new DatePipe('en-BE');
      let dateStamp = datePipe.transform(Date.now(), 'd/MM/y H:mm');

      let payload: formPayload = {
          firstname: this.contactForm.get('firstname')?.value,
          name: this.contactForm.get('name')?.value,
          street: this.contactForm.get('street')?.value,
          postcode: this.contactForm.get('postcode')?.value,
          email: this.contactForm.get('email')?.value,
          telephone: this.contactForm.get('telephone')?.value,
          treatment: this.contactForm.get('treatment')?.value,
          extra: this.contactForm.get('extra')?.value,
          date: dateStamp
      }

      emailjs.send('service_3g7jblh', 'template_hf39w7n', {...payload}, {
        publicKey: 'yi1Zymy11bXHkJm8Y'
      }).then(
        () => {
          emailjs.send('service_3g7jblh', 'template_vdbr26d', {...payload}, {
            publicKey: 'yi1Zymy11bXHkJm8Y'
          });
        },
        (error) => {
          console.log((error as EmailJSResponseStatus).text);
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
