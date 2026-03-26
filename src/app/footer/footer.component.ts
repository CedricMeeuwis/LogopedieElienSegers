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
        <a href="contact" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Contact</a>
        <a href="practisch" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Practisch</a>`;
  offerBlock = `<span class="fw-bold">Behandelingen</span>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Stotteren</a>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Preverbale logopedie</a>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Spraakontwikkeling en afwijkende mondgewoonten</a>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Taalontwikkeling en taalstoornis</a>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Leerstoornissen en leerproblemen</a>
        <a href="behandelingen" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">IMPACT-training</a>`;
  contactBlock = `<span class="fw-bold">Contact</span>
        <a href="https://maps.google.com/?q=Bergen+38" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">Bergen 38,<br/>2370 Arendonk</a>
        <a href="mailto:logopedie.eliensegers@gmail.com" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover text-break">logopedie.eliensegers@gmail.com</a>
        <a href="tel:+32445526390" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover link-dark link-primary-hover">+32 44 552 63 90</a>`;
}
