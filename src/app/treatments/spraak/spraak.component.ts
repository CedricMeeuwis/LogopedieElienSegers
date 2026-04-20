import { Component } from '@angular/core';
import { TreatmentInfo } from '../../treatment-info/treatment-info.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spraak',
  standalone: false,
  templateUrl: './spraak.component.html',
  styleUrl: './spraak.component.scss',
})
export class SpraakComponent {
  myTreatment!: TreatmentInfo;

  constructor(private sanitizer: DomSanitizer){
    this.myTreatment = {
    title: 'Spraak en afwijkende mondgewoonten',
    images: [
      {
        imageLink: 'assets/images/IMG_1454_1080.jpg',
        imageColor: 'dark'
      },
      {
        svg: this.sanitizer.bypassSecurityTrustHtml(`<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            zoomAndPan="magnify"
            viewBox="0 0 1024.5 576"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <path
              fill="#bd9793"
              d="M 452.5 203.789062 C 452.5 203.789062 770.351562 159.285156 828.214844 234.753906 C 875.6875 296.683594 879.816406 415.589844 832.335938 450.6875 C 784.855469 485.78125 712.605469 472.152344 712.605469 472.152344 C 712.605469 472.152344 766.285156 534.082031 758.023438 542.339844 C 749.761719 550.597656 677.855469 511.375 649.816406 488.667969 C 621.777344 465.960938 490.386719 487.304688 452.5 474.21875 C 384.378906 450.6875 341.03125 352.421875 357.542969 286.363281 C 374.054688 220.304688 427.84375 205.578125 452.5 203.789062 Z M 452.5 203.789062 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#fadbcd"
              d="M 571.183594 69.605469 C 571.183594 69.605469 253.328125 25.105469 195.46875 100.574219 C 147.988281 162.503906 143.863281 281.40625 191.339844 316.5 C 238.820312 351.59375 311.074219 337.972656 311.074219 337.972656 C 311.074219 337.972656 257.398438 399.902344 265.660156 408.160156 C 273.914062 416.417969 345.828125 377.195312 373.863281 354.484375 C 401.902344 331.777344 533.292969 353.121094 571.183594 340.035156 C 639.304688 316.503906 682.65625 218.238281 666.136719 152.183594 C 649.625 86.121094 595.835938 71.398438 571.183594 69.605469 Z M 571.183594 69.605469 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#d17050"
              d="M 348.789062 191.808594 C 348.789062 191.808594 322.003906 203.785156 334.441406 212.625 C 346.871094 221.460938 366.964844 218.59375 366.003906 207.113281 C 365.046875 195.632812 356.417969 187.667969 348.789062 191.808594 Z M 348.789062 191.808594 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#d17050"
              d="M 401.402344 193.183594 C 401.402344 193.183594 380.351562 208.722656 401.402344 215.417969 C 422.445312 222.113281 425.316406 210.40625 423.402344 204.300781 C 421.488281 198.195312 415.75 186.257812 401.402344 193.183594 Z M 401.402344 193.183594 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill="#d17050"
              d="M 459.753906 191.085938 C 459.753906 191.085938 445.40625 196.667969 447.316406 207.191406 C 449.230469 217.710938 461.664062 220.953125 468.359375 217.417969 C 475.0625 213.882812 483.667969 204.320312 479.839844 198.582031 C 476.015625 192.84375 466.320312 187.265625 459.753906 191.085938 Z M 459.753906 191.085938 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </svg>`),
        svgPadding: "0",
        svgColor: "primary"
      },
      {
        imageLink: 'assets/images/IMG_1800_1080.jpg',
        imageColor: 'secondary'
      },
    ]
  }
  }
}
