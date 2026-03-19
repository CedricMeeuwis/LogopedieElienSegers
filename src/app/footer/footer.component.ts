import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  infoBlock = `<span class="fw-bold">Info</span>
        <a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Home</a>
        <a href="over-mij" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Over mij</a>
        <a href="contact" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Contact</a>`;
  offerBlock = `<span class="fw-bold">Aanbod</span>
        <a href="aanbod#behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Behandelingen</a>
        <a href="aanbod#tarieven" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Tarieven</a>
        <a href="aanbod" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Z</a>`;
  contactBlock = `<span class="fw-bold">Contact</span>
        <span>Bergen 38,<br/>2370 Arendonk</span>
        <a href="mailto:logopedie-eliensegers@gmail.com" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">logopedie-eliensegers@gmail.com</a>
        <span>+32 44 552 63 90</span>`;
}
